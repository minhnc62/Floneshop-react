import { productState } from "../redux/productSlice";



export  const getSortedProducts = (products: any, sortType: any, sortValue: any) => {
    if (products && sortType && sortValue) {
      if (sortType === "category") {
        return products.filter(
          (product:productState) => product.categori.filter((single:string) => single === sortValue)[0]
        );
      }
      
      if (sortType === "color") {
        return products.filter(
          (product:productState) => product.color.filter((single:string) => single === sortValue)[0]
        );
      }
      if (sortType === "size") {
        return products.filter(
          (product:productState) => product.size.filter((single:string) => single === sortValue)[0]
        );
      }
      if (sortType === "filterSort") {
        let sortProducts = [...products];
        if (sortValue === "default") {
          return sortProducts;
        }
        if (sortValue === "priceHighToLow") {
          
          return sortProducts.sort((a, b) => {
            
            return b.price - a.price;
          });
        }
        if (sortValue === "priceLowToHigh") {
          return sortProducts.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
    }
    return products;
  };
// get individual element
const getIndividualItemArray = (array:any) => {
  let individualItemArray = array.filter(function(v: any, i: any, self: any) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

  export const getIndividualCategories = (products:any) => {
    let productCategories:any = [];
    products &&
      products.map((product:productState) => {
        return (
          product.categori &&
          product.categori.map((single :any)=> {
            return productCategories.push(single);
          })
        );
      });
    const individualProductCategories = getIndividualItemArray(productCategories);
    return individualProductCategories;
  };

  // get individual colors
export const getIndividualColors = (products:any) => {
  let productColors: any[] = [];
  products &&
    products.map((product:productState) => {
      return (
        product.color &&
        product.color.map((single :any)=> {
          return productColors.push(single);
        })
      );
    });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};
// get individual sizes
export const getProductsIndividualSizes = (products:any) => {
  let productSizes: any[] = [];
  products &&
    products.map((product:productState) => {
      return (
        product.color &&
        product.color.map((single :any)=> {
          return productSizes.push(single);
        })
      );
    });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
};