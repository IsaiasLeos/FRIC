import * as React from 'react'
import Table from 'react-bootstrap/Table'
import './systemView.css'
import Button from 'react-bootstrap/Button'
import SystemDetailedView from './systemDetailedView'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import SortImage from '../assets/updownarrow.png';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}
const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);
      
        const sortedItems = React.useMemo(() => {
          let sortableItems = [...items];
          if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
              if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
              }
              if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
              }
              return 0;
            });
          }
          return sortableItems;
        }, [items, sortConfig]);
      
        const requestSort = (key) => {
          let direction = 'ascending';
          if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
          ) {
            direction = 'descending';
          }
          setSortConfig({ key, direction });
        };
      
        return { items: sortedItems, requestSort, sortConfig };
      };
      
      const ProductTable = (props) => {
        const { items, requestSort, sortConfig } = useSortableData(props.products);
        const getClassNamesFor = (name) => {
          if (!sortConfig) {
            return;
          }
          return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <Table bordered hover striped>
            <thead className="thead-grey">
              <tr>
                <th> System Name <input type="image" alt="sort button" src={SortImage}  onClick={() => requestSort('name')} className={getClassNamesFor('name')} /></th>
                <th> No. of Task <input type="image" alt="sort button" src={SortImage}  onClick={() => requestSort('num_task')} className={getClassNamesFor('num_task')} /></th>
                <th> No. Finding <input type="image" alt="sort button" src={SortImage}  onClick={() => requestSort('num_finding')} className={getClassNamesFor('num_finding')} /></th>
                <th> Progress <input type="image" alt="sort button" src={SortImage}    onClick={() => requestSort('progress_percent')} className={getClassNamesFor('progress_percent')} /></th>
                  {/* <Button variant="outline-dark" id onClick={() => requestSort('name')} className={getClassNamesFor('name')}> */}
                  {/* </Button> </div> */}
                
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.num_task}</td>
                  <td>{item.num_finding}</td>
                  <td>{item.progress_percent}</td>
                </tr>
              ))}
              {/* {props.data.map((state) => (
                <tr>
                    <td><input type="checkbox" /></td>
                    <td><Button variant="outline-dark">{state.sysInfo}</Button></td>
                    <td>{state.num_task}</td>
                    <td>{state.num_findings}</td>
                    <td>{state.prog}</td>
                </tr>
            ))} */}
            </tbody>
          </Table>
        );
      };
      

export default function SystemContentView(props) {

    const [dialogOpen, handleDialog] = React.useState(false)
    function handleDialogOpen() {
        handleDialog(true)
        sendLog("system dialog open");
    }

    function handleDialogClose() {
        handleDialog(false)
        sendLog("system dialog close")
    }
    function sendLog(a) {
        let action = {
            date: getCurrentDate("/"),
            action: a,
            analyst: ""
        }
        fetch('/addlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    useEffect(() => {
        props.updateData();
    });

    return (
        <div >
            
            <div className="main">
                <div className="SystemContentView">
                    <div id="systemTable" update={props.updateSystemData}>
                        <div className="title-buttons">
                            <h2>System Overview Table</h2>


                            <ButtonGroup dialogclassname="title-system-buttons">
                                <Button variant="dark" >Archive</Button>
                                <Button variant="dark" onClick={handleDialogOpen}>Add</Button>
                            </ButtonGroup>
                            <Modal show={dialogOpen} onHide={handleDialogClose} >
                                <Modal.Header>
                                    <Modal.Title>
                                        System Detailed View
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <SystemDetailedView closeDetailAction={handleDialogClose} />
                                </Modal.Body>
                            </Modal>

                        </div>
                        <ProductTable
                            products={[
                            { id: 1, name: 'System2', num_task: '4', num_finding: '4', progress_percent: '40' },
                            { id: 2, name: 'System56', num_task: '3', num_finding: '1', progress_percent: '90'},
                            { id: 3, name: 'System1', num_task: '6', num_finding: '6', progress_percent: '23'},
                            { id: 4, name: 'System4', num_task: '1', num_finding: '2', progress_percent: '12'},
                            ]}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

