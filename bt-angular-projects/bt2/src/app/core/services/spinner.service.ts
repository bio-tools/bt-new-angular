import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
    private loading = false;

    show(): void {
        this.loading = true;
    }

    hide(): void {
        this.loading = false;
    }

    isLoading(): boolean {
        return this.loading;
    }
}
