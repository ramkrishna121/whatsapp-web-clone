import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // console.log(db.collection("rooms"));
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar src={user?.photoURL} />
        {console.log(rooms)};
        <div className="sidebar__top__right">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search__inside">
          <Search />
          <input type="text" placeholder="Search or add chat" />
        </div>
      </div>

      <div className="sidebar__chat">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat id={room.id} key={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
