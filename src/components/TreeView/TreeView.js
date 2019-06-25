import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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

    return list.map(item => {
      const foundItem = this.state.openItems.find(i => i.name === item.name);
      return (
        <div key={item.name} className={styles.list}>
          {item.child ?
            <ListItem button onClick={() => this.handleItemExpand(item)}>
              <ListItemText primary={item.name} />
              {
                foundItem && foundItem.isOpen ?
                  <ExpandLess className={styles.listItemExpandIcon} />
                  :
                  <ExpandLess className={[
                    styles.listItemExpandIconRotate,
                    styles.listItemExpandIcon
                  ]}
                  />
              }
            </ListItem>
            :
            <Fragment>
              <ListItem button
                component={Link}
                to={`${MAJOR_URL}/${item.id.toString()}`}
              >
                <ListItemText primary={item.name} />
              </ListItem >
              <Divider />
            </Fragment>
          }
          {
            openItems.some(openItem => openItem.name === item.name)
              && item.child
              && <TreeView list={item.child} />
          }
        </div>
      );
    }
    );
  }
}

export default TreeView;
