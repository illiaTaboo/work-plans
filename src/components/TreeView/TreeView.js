// TODO: add styles, refac
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MAJOR_URL } from 'consts';
import styles from './TreeView.scss';

class TreeView extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  state = {
    openItems: []
  }

  findOpenedItemIndex = item =>
    this.state.openItems.findIndex(openItem => {
      return openItem.name === item.name;
    });

  handleItemExpand = item => {
    const idx = this.findOpenedItemIndex(item);
    if (idx === -1) {
      this.setState({
        openItems:
          [...this.state.openItems,
            {
              name: item.name,
              isOpen: true
            }
          ]
      });
    } else {
      const lessItems = [...this.state.openItems].filter((item, i) => i !== idx);
      this.setState({ openItems: lessItems });
    }
  }

  render = () => {
    const { list } = this.props;
    const { openItems } = this.state;

    return list.map(item =>
      (
        <div key={item.name} style={{ paddingLeft: '20px' }}>
          {item.child ?
            <div onClick={() => this.handleItemExpand(item)}>
              {item.name} >
            </div>
            :
            <Link to={`${MAJOR_URL}/${item.id.toString()}`}>{item.name}</Link>
          }
          {
            openItems.some(openItem => openItem.name === item.name)
              && item.child
              && <TreeView list={item.child} />
          }
        </div>
      )
    );
  }
}

export default TreeView;
