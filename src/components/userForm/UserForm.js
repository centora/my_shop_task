import './userForm.scss';

export class UserForm extends Component {
  roles = ['Admin', 'User', 'Guest'];

  constructor(props) {
    super(props);
    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, placeholder: 'Enter your email' },
      { label: 'name', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your name' },
      { label: 'surname', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your surname' },
      {
        label: 'password', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Enter your password'
      },
      {
        label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Repeat your password'
      }
    ];

    this.state = {};

    this.fields.forEach(({ label }) => this.state[label] = '');
  }

  onChange = ({ target }) => {
    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: target.checked });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  render() {
    return (
      <form action="" className="form" autoComplete="off">
        <div>
          {
            this.fields.map((field, id) => (
              <div key={id}>
                <input
                  type={field.secure ? 'password' : 'text'}
                  name={field.label}
                  value={this.state[field.label]}
                  placeholder={field.placeholder}
                  onChange={this.onChange}
                />
              </div>
            ))
          }
        </div>
      </form>
    );
  }
}
