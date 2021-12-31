import "./LeftBar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Button from '@mui/material/Button';
import { Users } from "../../dummyData";
import CloseFriends from "../CloseFriends/CloseFriends";

export default function LeftBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li href="/profile"className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">feed</Button>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/messages">messages</Button>
          </li>
          <li className="sidebarListItem">
            <AddTaskIcon className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/myplan">my plan</Button>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">Groups</Button>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">Bookmarks</Button>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">questions</Button>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">jobs</Button>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">events</Button>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <Button classname="sidebar" variant="text" href="/">courses</Button>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
