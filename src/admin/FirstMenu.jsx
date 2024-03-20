import React from 'react';
import img1 from '../img/1.PNG';
import img2 from '../img/2.PNG';
import { Box, Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

export default function FirstMenu() {
	return (
		<>
			<div style={{ height: '90vh' }}>
				<div style={{ marginLeft: '5px', borderBottom: "1px solid gray", display: 'flex' }}>
					<img src={img1} alt='image' />
					<div style={{ marginTop: '15px' }}>
						<Typography variant='subtitle1' align='center' fontSize={12}> GREENWAVEIOT </Typography>
						<Typography variant='body1' align='center' fontSize={8}> Turn Technology Green </Typography>
					</div>
				</div>
				<div style={{ marginTop: '15px' }}>
					<Box sx={{ minHeight: 680, flexGrow: 1, maxWidth: 800 }}>
						<TreeView
							aria-label="file system navigator"
							defaultCollapseIcon={<ExpandMore />}
							defaultExpandIcon={<ChevronRight />}
						>
							<TreeItem nodeId="1" label="Admin">
								<TreeItem nodeId="2" label="Users" />
								<TreeItem nodeId="3" label="Organizations" />
							</TreeItem>
							<TreeItem nodeId="5" label="Dashboard">
								<TreeItem nodeId="6" label="Layout" />
							</TreeItem>
						</TreeView>
					</Box>
					<div style={{ marginLeft: '20px', color: 'white', display: 'flex' }}>
						<img src={img2} alt='logout' />
						<Typography variant='h6' marginLeft={3}> Log Out </Typography>
					</div>
				</div>
			</div>
		</>
	);
}
