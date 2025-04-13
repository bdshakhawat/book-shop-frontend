const UserDashboard = () => {
  return (
    <div className="">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="My Orders"
        />
        <div className="tab-content  bg-base-600 p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Profile Setting"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 2
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
