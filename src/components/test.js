import React, { useState, useEffect } from 'react';
import {
  DataTable as DataTableContainer,
  DataRowContainer,
  DataRowHeader,
  DataRowHighlightBox,
} from '../styled-components/DataTable';

const styles = {
  dataTable: {
    width: '100%',
    padding: '5px',
    overflow: 'scroll',
    fontSize: '.9rem',
  },
  dataRow: {},
  dataRowContainer: {
    height: '100px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    margin: '10px 0',
    display: 'grid',
    gridTemplateColumns: '0.3fr 1fr 1fr 1fr 1fr 1fr',
    overflow: 'hidden',
  },
  selectedDataRowContainer: {
    height: '100px',
    width: '100%',
    backgroundColor: '#fff5b3',
    margin: '10px 0',
    display: 'grid',
    gridTemplateColumns: '0.3fr 1fr 1fr 1fr 1fr 1fr',
  },
  dataRowHighlightBox: {
    height: '100%',
    width: '20px',
    backgroundColor: '#E9CF30',
  },
  dataRowHeader: { fontWeight: '700' },
};

const Test = ({ dataArray }) => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();

  const SelectRow = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    setData(dataArray.data);
  }, []);

  return (
    <DataTableContainer>
      <h1>Events</h1>
      <div>
        {data &&
          data.map((item, index) => (
            <DataRow
              data={item}
              key={index}
              SelectRow={SelectRow}
              value={index}
              selected={selected}
            />
          ))}
      </div>
    </DataTableContainer>
  );
};

export default Test;

const DataRow = ({ data, value, SelectRow, selected }) => {
  return (
    <div
      style={styles.dataRow}
      onClick={() => {
        SelectRow(value);
      }}
    >
      <DataRowContainer selected={selected === value ? true : false}>
        <DataRowHighlightBox selected={selected === value ? true : false} />
        <div>
          <DataRowHeader>{data.details[0].title}</DataRowHeader>
          <p>{data.details[0].value.replace('T', ' ').replace('Z', ' ')}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[1].title}</DataRowHeader>
          <p>{data.details[1].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[2].title}</DataRowHeader>
          <p>{data.details[2].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[3].title}</DataRowHeader>
          <p>{data.details[3].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[4].title}</DataRowHeader>
          <p>{data.details[4].value}</p>
        </div>
      </DataRowContainer>
    </div>
  );
};
