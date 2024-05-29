// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
// import { Reflector } from '@nestjs/core'
// import { UsersService } from 'src/users/users.service'

// @Injectable()
// export class PermissionsGuard implements CanActivate {
// 	constructor(
// 		private reflector: Reflector,
// 		private readonly user: UsersService,
// 	) {}

// 	async canActivate(context: ExecutionContext): Promise<boolean> {
// 		const requiredPermissions = this.reflector.get<string[]>(
// 			'permissions',
// 			context.getHandler(),
// 		);
// 		if (!requiredPermissions) {
// 			return true
// 		}
// 		const request = context.switchToHttp().getRequest()
		
// 		const user = request.user

// 		const [userPermissions, error] = await this.user.getUserPermissions(user.permissions)

// 		if (error) {
// 			return false
// 		}

// 		const hasPermission = userPermissions.some((permission) =>
// 			requiredPermissions.includes(permission),
// 		);

// 		return hasPermission
// 	}
// }