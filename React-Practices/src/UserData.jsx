const UserData = ({ users }) => {
  return (
    <>
      {users.map((cruData) => {
        const { id, name, email } = cruData;
        const { street, suite, city, zipcode } = cruData.address;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              {street}, {suite},{city},{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
