import React from 'react';
import styles from './index.module.scss';
import SvgIcon from '@/components/SvgIcon';

export default function NavLink(props) {
  const linkProps = {};
  linkProps.className=props.menuType==='headerMenu'?styles.headerItem:styles.aslideItem;
  if (props.newWindow) {
    linkProps.href = props.path;
    linkProps.target = '_blank';
  } else if (props.external) {
    linkProps.href = props.path;
  } else {
    linkProps.href = `#${props.path}`;
  }
  return <a  {...linkProps} ><SvgIcon width="16" height="16" iconName={props.icon}/>{props.name}</a>;
}