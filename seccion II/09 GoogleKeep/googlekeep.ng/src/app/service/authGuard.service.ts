import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./authService.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): boolean {
        var resultState = this.auth.isAuthenticated();
        if(!resultState)
            this.router.navigate(['/auth/login']);
        return resultState;
    }
}