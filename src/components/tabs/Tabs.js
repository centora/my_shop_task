import './tabs.scss';
import { TabNav } from './TabNav';

export class Tabs extends Component {
  state = {
    selectedIndex: 0
  }

  selectTab = (selectedIndex) => {
    this.setState({
      selectedIndex
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div className="tabs">
        <TabNav titles={tabs.map(tab => tab.title)} selectedIndex={selectedIndex} selectTab={this.selectTab} />
        <section className="tab-content">
          { tabs[selectedIndex].content }
        </section>
      </div>
    );
  }
}
