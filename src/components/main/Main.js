import { UserForm } from '../userForm';
import './main.scss';
import { EditableText } from '../editableText';

export class Main extends Component {
  state = {
    data: ''
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          email: 'oksa@oksa.com',
          name: 'Oksana',
          surname: 'Oksa'
        }
      });
    }, 1000);
  }

  onSave = (data) => {
    console.log(data);
  }

  render() {
    const { title } = this.props;
    const { data } = this.state;
    const fn = text => console.log(text);

    return (
      <main className="main">
        <div className="content">
          <h1>{title}</h1>
          <EditableText onUpdateFieldHandle={fn} />
          <UserForm data={data} onSave={this.onSave} />
        </div>
      </main>
    );
  }
}
