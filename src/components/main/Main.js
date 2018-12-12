import { UserForm } from '../userForm';
import './main.scss';
import { EditableText } from '../editableText';

export class Main extends Component {
  render() {
    const { title } = this.props;
    const fn = text => console.log(text);
    return (
      <main className="main">
        <div className="content">
          <h1>{title}</h1>
          <EditableText fn={fn} />
          <UserForm />
        </div>
      </main>
    );
  }
}
