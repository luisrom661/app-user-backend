export class UserModel {
	constructor({ name, email, password, img, role, state, google }) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.img = img;
		this.role = role || 'USER_ROLE';
		this.state = state || true;
		this.google = google || false;
	}

	toJSON() {
		const { _id, ...user } = this;
		user.uid = _id;
		return user;
	}
}
