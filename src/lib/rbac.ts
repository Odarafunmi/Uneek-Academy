import type { Role } from './types';

/**
 * Role-based access control.
 *
 * v1 runs fully in the browser (local accounts), so these checks execute in the
 * client — but they are the single source of truth for permissions, shaped
 * exactly like the server-side RBAC that will enforce them when the backend
 * lands. Never check `role === 'admin'` in components; call these helpers.
 */

export const PERMISSIONS = [
  'content:read',
  'content:publish',
  'content:edit:any',
  'content:delete:any',
  'content:edit:own',
  'content:delete:own',
] as const;

export type Permission = (typeof PERMISSIONS)[number];

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  learner: ['content:read', 'content:edit:own', 'content:delete:own'],
  admin: [
    'content:read',
    'content:publish',
    'content:edit:any',
    'content:delete:any',
    'content:edit:own',
    'content:delete:own',
  ],
};

export function permissionsFor(role: Role): Permission[] {
  return ROLE_PERMISSIONS[role] ?? ROLE_PERMISSIONS.learner;
}

export function can(role: Role | undefined | null, permission: Permission): boolean {
  return permissionsFor(role ?? 'learner').includes(permission);
}

/** Publishing, editing, and managing library content is strictly admin. */
export function canManageContent(role: Role | undefined | null): boolean {
  return can(role, 'content:publish');
}

export function canEditArticle(
  role: Role | undefined | null,
  article: { authorEmail?: string },
  userEmail: string | undefined | null,
): boolean {
  if (can(role, 'content:edit:any')) return true;
  return (
    can(role, 'content:edit:own') &&
    !!userEmail &&
    article.authorEmail === userEmail.toLowerCase()
  );
}

export function canDeleteArticle(
  role: Role | undefined | null,
  article: { authorEmail?: string },
  userEmail: string | undefined | null,
): boolean {
  if (can(role, 'content:delete:any')) return true;
  return (
    can(role, 'content:delete:own') &&
    !!userEmail &&
    article.authorEmail === userEmail.toLowerCase()
  );
}
