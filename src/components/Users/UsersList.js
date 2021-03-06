import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
import UsersListItem from "./UsersListItem";

function UsersList({ users = [], getUsers }) {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="users-list" data-testid="users-list">
      <div className="ui divided items">
        {users.map((user, idx) => (
          <div data-testid="user-list-item" key={idx}>
            <UsersListItem user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(UsersList);
