import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import { getAPI } from "../utils/getAPI.jsx";
import { useState } from "react";
import { useEffect } from "react";
import useQuery from "../hooks/useQuery.jsx";
import { useDebounce } from "../hooks/useDebounce.jsx";
import { Link } from "react-router";
import Search from "./Search.jsx";
import Spinner from "./Spinner.jsx";
import Latest from "../components/Latest.jsx";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default function MainContent() {
  const [products, setProducts] = useState([]);
  const [api, setAPI] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const query = useQuery();
  const search = query.get("search");
  const searchDebounce = useDebounce(search, 300);

  const filterByCategory = (arr, value) => {
    value = value.toLowerCase().replace(/\s+/g, "");
    return arr.filter((item) =>
      item.types[0].toLowerCase().replace(/\s+/g, "").includes(value)
    );
  };

  const filterByInput = (arr, value) => {
    value = value.toLowerCase().replace(/\s+/g, "");
    return arr.filter((item) =>
      item.name.toLowerCase().replace(/\s+/g, "").includes(value)
    );
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getAPI(
        "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100"
      );
      const api = await getAPI("https://api.pokemontcg.io/v2/cards");
      setAPI(api);
      let filter = [];

      if (category) {
        filter = filterByCategory(response.data, category);
      } else if (searchDebounce) {
        filter = filterByInput(response.data, searchDebounce);
      } else {
        filter = response.data;
      }

      setIsLoading(false);
      setProducts([...filter]);
    }

    fetchData();
  }, [category, searchDebounce]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI("https://api.pokemontcg.io/v2/types");
      setCategories([...response.data]);
    }

    fetchData();
  }, []);

  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleOnClick = (e) => {
    console.info("You clicked the filter chip." + e.target.id);
    setCategory(e.target.id);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Tienda
        </Typography>
        <Typography>
          Manténgase informado sobre las últimas novedades sobre nuestros
          productos.
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          {categories.length > 0 &&
            categories.map((element, index) => (
              <Chip
                id={element}
                key={index}
                onClick={handleOnClick}
                size="medium"
                label={element}
              />
            ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} columns={12}>
        {!isLoading ? (
          products.map(
            (element) => (
              console.log(api),
              (
                <Grid key={element.id} size={{ xs: 12, md: 3 }}>
                  <Link to={`/Details/${element.id}`}>
                    <SyledCard
                      variant="outlined"
                      onFocus={() => handleFocus(0)}
                      onBlur={handleBlur}
                      tabIndex={0}
                      className={focusedCardIndex === 0 ? "Mui-focused" : ""}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        image={element.images.large}
                        sx={{
                          aspectRatio: "16 / 9",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                        }}
                      />
                      <SyledCardContent>
                        <Typography
                          gutterBottom
                          variant="caption"
                          component="div"
                        >
                          {element.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {element.flavorText
                            ? element.flavorText
                            : "La descripción de este producto no está disponible."}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "auto",
                            alignItems: "center",
                          }}
                        >
                          <IconButton sx={{ padding: "30px" }}>+</IconButton>
                          <StyledTypography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                          >
                            {element.cardmarket.prices.averageSellPrice + "€"}
                          </StyledTypography>
                          <IconButton sx={{ padding: "30px" }}>-</IconButton>
                        </Box>
                      </SyledCardContent>
                    </SyledCard>
                  </Link>
                </Grid>
              )
            )
          )
        ) : (
          <Spinner />
        )}
        <Latest props={api}></Latest>
      </Grid>
    </Box>
  );
}
