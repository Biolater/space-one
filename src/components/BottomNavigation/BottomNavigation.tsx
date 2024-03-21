import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import LogoutIcon from "@mui/icons-material/Logout";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AddMessageModal from "./AddMessageModal";
import { useNavigate } from "react-router";
import Notifications from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
//@ts-expect-error expected
import { auth } from "../../firebase";
import PersonSearch from "@mui/icons-material/PersonSearch";
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

type User = {
  displayName: string;
  photoURL: string;
};

export default function BottomAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [drawerVariant, setDrawerVariant] = useState("temporary");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
  const messageModalRef = useRef(null);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleMessageModalState = () => {
    setIsMessageModalOpen((prevState) => !prevState);
  };
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      setDrawerVariant("permanent");
    } else {
      setDrawerVariant("temporary");
    }
    function handleResize() {
      windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setDrawerVariant("permanent");
      } else {
        setDrawerVariant("temporary");
      }
    }
    function handleModalOutsideClick(event: Event) {
      if (event.target == messageModalRef.current) {
        setIsMessageModalOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    if (isMessageModalOpen) {
      document.addEventListener("click", handleModalOutsideClick);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      if (isMessageModalOpen) {
        document.removeEventListener("click", handleModalOutsideClick);
      }
    };
  }, [isMessageModalOpen]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user as User);
        } else {
          setUser(null);
        }
        return unsubscribe;
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
      localStorage.removeItem("userLoggedin");
    });
  };
  return (
    <>
      {createPortal(
        <AddMessageModal
          modalRef={messageModalRef}
          isModalOpen={isMessageModalOpen}
        />,
        document.body
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <CssBaseline />
          <AppBar
            position="fixed"
            color="primary"
            sx={{
              top: "auto",
              bottom: 0,
              display: drawerVariant === "permanent" ? "none" : "",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => handleDrawerOpen()}
              >
                <MenuIcon />
              </IconButton>
              <StyledFab
                onClick={handleMessageModalState}
                color="secondary"
                aria-label="add"
              >
                <AddIcon
                  sx={{
                    transition: "all 300ms",
                    transform: `${isMessageModalOpen && "rotate(135deg)"}`,
                  }}
                />
              </StyledFab>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              backgroundColor: "#191919",
              "& .MuiDrawer-paper": { justifyContent: "space-between" },
            }}
            open={isDrawerOpen}
            variant={drawerVariant as "temporary" | "permanent" | "persistent"}
            onClose={() => handleDrawerClose()}
            PaperProps={{
              className: "customDrawerPaper",
            }}
          >
            <List>
              <Tooltip
                TransitionComponent={Zoom}
                title="Explore"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/explore")}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <ExploreIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Add Message"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setIsMessageModalOpen(prev => !prev)}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <AddIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Notifications"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/notifications")}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <Notifications sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Add friends"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/users")}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <PersonSearch sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Friends"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/friends")}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <PeopleIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            </List>
            <List
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Tooltip
                TransitionComponent={Zoom}
                title="Log out"
                placement="right"
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleLogOut()}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "unset", display: "block" }}>
                      <LogoutIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Go to profile"
                placement="right"
              >
                <Avatar
                  onClick={() => navigate("/dashboard")}
                  src={
                    user?.photoURL ||
                    "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
                  }
                  sx={{ width: 60, height: 60, cursor: "pointer" }}
                />
              </Tooltip>
            </List>
          </Drawer>
        </>
      )}
    </>
  );
}
