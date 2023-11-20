import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const App = () => {
  const [data, setData] = useState({
    accounts: [
      { ID: 1, USERNAME: 'Adie2603', PASSWORD: 'ad!e26', USERTYPE: 'Student' },
      { ID: 2, USERNAME: 'Ramae02', PASSWORD: 'Flr402', USERTYPE: 'Student' },
      { ID: 3, USERNAME: 'Sam015', PASSWORD: 'J3ss@', USERTYPE: 'Student' },
      { ID: 4, USERNAME: 'Velenie17', PASSWORD: '3vel!n', USERTYPE: 'Teacher' },
      { ID: 5, USERNAME: 'Namae19', PASSWORD: 'R3yn@', USERTYPE: 'Student' },
      { ID: 6, USERNAME: 'Liclic06', PASSWORD: '&nn4cle0', USERTYPE: 'Teacher' },
      { ID: 7, USERNAME: 'Raquel018', PASSWORD: 'r4Qu37', USERTYPE: 'Teacher' },
      { ID: 8, USERNAME: 'Asheing20', PASSWORD: '4&hl3!', USERTYPE: 'Student' },
      { ID: 9, USERNAME: 'J3ss23', PASSWORD: 'J3ss4Lyhnn3', USERTYPE: 'Student' },
      { ID: 10, USERNAME: 'Emily90', PASSWORD: '3ml!9', USERTYPE: 'Student' },
    ],
    users: [
      { ID: 1, FIRSTNAME: 'Adrian Jane', LASTNAME: 'Tahil', COURSE: 'BSIT', YEAR: '2023', SECTION: 'A' },
      { ID: 2, FIRSTNAME: 'Flora Mae', LASTNAME: 'Requillo', COURSE: 'BSIT', YEAR: '2022', SECTION: 'B' },
      { ID: 3, FIRSTNAME: 'Jessa Mae', LASTNAME: 'Julio', COURSE: 'BSED', YEAR: '2023', SECTION: 'B' },
      { ID: 4, FIRSTNAME: 'Evelyn', LASTNAME: 'Adtoon', COURSE: 'BEED', YEAR: '2010', SECTION: 'D' },
      { ID: 5, FIRSTNAME: 'Reyna Mae', LASTNAME: 'Julio', COURSE: 'BSED', YEAR: '2023', SECTION: 'B' },
      { ID: 6, FIRSTNAME: 'Ana Cleo', LASTNAME: 'Razon', COURSE: 'BSED', YEAR: '2008', SECTION: 'C' },
      { ID: 7, FIRSTNAME: 'Raquel', LASTNAME: 'Ontong', COURSE: 'BSED', YEAR: '2006', SECTION: 'E' },
      { ID: 8, FIRSTNAME: 'Cleofe Ashley', LASTNAME: 'Tahil', COURSE: 'Psychology', YEAR: '2023', SECTION: 'A' },
      { ID: 9, FIRSTNAME: 'Jessa Lyhanne', LASTNAME: 'Adtoon', COURSE: 'BSN', YEAR: '2023', SECTION: 'C' },
      { ID: 10, FIRSTNAME: 'Emily', LASTNAME: 'Mogot', COURSE: 'BS-CRIM', YEAR: '2023', SECTION: 'B' },
    ],
    students: [],
  });

  useEffect(() => {
   
    const students = data.accounts
      .filter((account) => account.USERTYPE === 'Student')
      .map(({ ID, USERNAME }) => {
        const correspondingUser = data.users.find((user) => user.ID === ID);
        return {
          ID,
          NAME: `${correspondingUser.FIRSTNAME} ${correspondingUser.LASTNAME}`,
          COURSE: correspondingUser.COURSE,
        };
      });

    
    setData((prevData) => ({
      ...prevData,
      students,
    }));
  }, [data.accounts, data.users]);

  const renderTable = (tableData, columnNames, numRows) => (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: 'gray' }}>
        <Row
          data={columnNames}
          widthArr={Array(columnNames.length).fill(100)}
          style={{ height: 60, backgroundColor: '#537791', justifyContent: 'center' }}
          textStyle={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}
        />
        {tableData.slice(0, numRows).map((rowData, index) => (
          <Row
            key={rowData.ID}
            data={columnNames.map((columnName) => rowData[columnName])}
            widthArr={Array(columnNames.length).fill(100)}
            style={{
              height: 40,
              backgroundColor: index % 2 === 1 ? '#f1f8ff' : '#fff',
              justifyContent: 'center',
            }}
            textStyle={{ textAlign: 'center', fontWeight: '100', color: '#333' }}
          />
        ))}
      </Table>
    </View>
  );

  const renderStudentList = () => (
    <View>
      <Text style={styles.tableHeader}>Students Table</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: 'gray' }}>
        <Row
          data={['ID', 'NAME', 'COURSE']}
          widthArr={[100, 200, 100]}
          style={{ height: 60, backgroundColor: '#537791', justifyContent: 'center' }}
          textStyle={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}
        />
        {data.students.map((rowData, index) => (
          <Row
            key={rowData.ID}
            data={[rowData.ID, rowData.NAME, rowData.COURSE]}
            widthArr={[100, 200, 100]}
            style={{
              height: 40,
              backgroundColor: index % 2 === 1 ? '#f1f8ff' : '#fff',
              justifyContent: 'center',
            }}
            textStyle={{ textAlign: 'center', fontWeight: '100', color: '#333' }}
          />
        ))}
      </Table>
    </View>
  );

  return (
    <ScrollView>
      <View>
        <Text style={styles.tableHeader}>Accounts Table</Text>
        {renderTable(data.accounts, ['ID', 'USERNAME', 'PASSWORD', 'USERTYPE'], 10)}
      </View>
      <View>
        <Text style={styles.tableHeader}>Users Table</Text>
        {renderTable(data.users, ['ID', 'FIRSTNAME', 'LASTNAME', 'COURSE', 'YEAR', 'SECTION'], 15)}
      </View>
      {renderStudentList()}
    </ScrollView>
  );
};

const styles = {
  tableHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
};

export default App;
