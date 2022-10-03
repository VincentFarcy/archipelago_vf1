import React from 'react';
import { SingleFieldList, ChipField } from 'react-admin';
import { Grid, Typography } from '@material-ui/core';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { ReferenceArrayField } from '@semapps/field-components';
import DocumentTitle from './DocumentTitle';
import { MarkdownField } from '../../../common/field';
import { MainList, SideList } from '../../../common/list';

const DocumentShow = props => (
  <ShowWithPermissions title={<DocumentTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MainList>
          <MarkdownField source="pair:description" addLabel={false} />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Type" source="pair:hasType">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Agent" source="pair:documents">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </ShowWithPermissions>
);

export default DocumentShow;
