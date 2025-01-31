import React from 'react';
import PanToolIcon from '@material-ui/icons/PanTool';
import SimpleList from "../../../common/list/SimpleList";
import List from "../../../layout/list/List";

const SkillList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <PanToolIcon />} linkType="show" />
  </List>
);

export default SkillList;
