// here we are creating a class to be used as a model for sign in /create account features

export class Users {
  constructor(
    public firstName: String,
    public lastName: String,
    public id: number,
    public password: String,
    public email: String,
    public state: String,
    public phone?: String
  ) {}
}
