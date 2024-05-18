import react, { useState, useEffect } from "react";
import axios from "axios";
import SelectButton from "./CategorySelectButton";
const CategoryRoot = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/menus/categories/6648141264fced5eebd93f27"
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return <SelectButton categories={categories} />;
};
export default CategoryRoot;
