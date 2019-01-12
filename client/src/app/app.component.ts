import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required)
	});

	constructor(private http: HttpClient) {}

	public async GetGreeting(): Promise<void> {
		try {
			const name: string = this.form.get('name').value;
			const { message } = <any>(await this.http.get(`/api/v1/hello/${ name }`).toPromise());
			alert(message);
		} catch (err) {
			console.warn('[ERROR]: AppComponent.GetGreeting:', err);
		} finally {
			this.form.reset();
		}
	}
}