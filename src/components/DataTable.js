import React from 'react';

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

const DataTable = ({ data, setData, selected, setSelected }) => {
  const SelectRow = (id) => {
    setSelected(id);
  };
  return (
    <div style={styles.dataTable}>
      <h1>Events</h1>
      <div>
        {data.data &&
          data.data.map((item, index) => (
            <DataRow
              data={item}
              key={index}
              SelectRow={SelectRow}
              selected={selected}
            />
          ))}
      </div>
    </div>
  );
};

export default DataTable;

const DataRow = ({ data, SelectRow, selected }) => {
  return (
    <div
      style={styles.dataRow}
      onClick={() => {
        SelectRow(data.id);
      }}
    >
      <div
        style={
          selected === data.id
            ? styles.selectedDataRowContainer
            : styles.dataRowContainer
        }
      >
        <div
          style={
            data.details[4].value === '-' ? styles.dataRowHighlightBox : {}
          }
        />
        <div>
          <p style={styles.dataRowHeader}>{data.details[0].title}</p>
          <p>{data.details[0].value.replace('T', ' ').replace('Z', ' ')}</p>
        </div>
        <div>
          <p style={styles.dataRowHeader}>{data.details[1].title}</p>
          <p>{data.details[1].value}</p>
        </div>
        <div>
          <p style={styles.dataRowHeader}>{data.details[2].title}</p>
          <p>{data.details[2].value}</p>
        </div>
        <div>
          <p style={styles.dataRowHeader}>{data.details[3].title}</p>
          <p>{data.details[3].value}</p>
        </div>
        <div>
          <p style={styles.dataRowHeader}>{data.details[4].title}</p>
          <p>{data.details[4].value}</p>
        </div>
      </div>
    </div>
  );
};
