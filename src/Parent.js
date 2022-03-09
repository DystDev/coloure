import React from 'react';
import PanelHandler from './PanelHandler';
import PanelUpdater from './PanelUpdater';
import PanelIncrementer from './PanelIncrementer';
import Logo from './Logo';
import PanelSharer from './PanelSharer';
import './Parent.css';
import Modal from 'react-modal';
import ShareHandler from './ShareHandler';
import ShareCopier from './ShareCopier';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPanels: 5,
      colors: ['#149274', '#f36234', '#1f84a6', '#06f85b', '#555555'],
      modalIsOpen: false
    };
    this.removePanel = this.removePanel.bind(this);
    this.addPanel = this.addPanel.bind(this);
    this.updatePanels = this.updatePanels.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  removePanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    if (currentPanels === 1) {
      return;
    }
    currentColors.pop();
    // If there is one panel, then reject and keep numberPanels at 1
    this.setState({
      numberPanels: --currentPanels,
      colors: currentColors
    });
  }

  addPanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    if (currentPanels === 12) {
      return;
    }
    let randomColor = this.getRandomHex();
    currentColors.push(randomColor);
    // Add a panel (no limit lol)
    this.setState({ numberPanels: ++currentPanels, colors: currentColors });
  }

  updatePanels() {
    let numToUpdate = this.state.numberPanels;
    let arr = [];
    for (let i = 0; i < numToUpdate; i++) {
      arr.push(this.getRandomHex());
    }
    this.setState({ colors: arr });
  }

  getRandomHex() {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <>
        <PanelHandler num={this.state.numberPanels} col={this.state.colors} />
        <div className="nav">
          <div>
            <PanelIncrementer
              onAdd={this.addPanel}
              onRemove={this.removePanel}
            />
          </div>
          <Logo className="logo" />
          <PanelUpdater onClick={this.updatePanels} />
        </div>
        <div className="share">
          <PanelSharer onClick={this.openModal} />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Share"
        >
          <ShareHandler colors={this.state.colors} />
          <ShareCopier />
          <button onClick={this.closeModal} class="modalClose">
            Close
          </button>
        </Modal>
        )
      </>
    );
  }
}
