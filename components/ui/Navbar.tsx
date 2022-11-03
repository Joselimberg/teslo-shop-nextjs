import NextLink from "next/link";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <MuiLink
          display="flex"
          alignItems="center"
          component={NextLink}
          href="/"
        >
          <Typography variant="h6">Teslo |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </MuiLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <MuiLink component={NextLink} href="/category/men" passHref>
            <Button>Hombres</Button>
          </MuiLink>

          <MuiLink component={NextLink} href="/category/women" passHref>
            <Button>Mujeres</Button>
          </MuiLink>

          <MuiLink component={NextLink} href="/category/kid" passHref>
            <Button>Niños</Button>
          </MuiLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <MuiLink component={NextLink} href="/cart" passHref>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </MuiLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
