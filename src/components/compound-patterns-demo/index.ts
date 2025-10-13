import RestaurantCardRoot from "./RestaurantCard";
import { RestaurantImage } from "./RestaurantImage";
import { RestaurantHeader } from "./RestaurantHeader";
import { RestaurantSpecialties } from "./RestaurantSpecialties";
import { RestaurantInfo } from "./RestaurantInfo";
import { RestaurantContent } from "./RestaurantContent";

// Compound Pattern: Componente principal com sub-componentes anexados
const RestaurantCard = Object.assign(RestaurantCardRoot, {
    Image: RestaurantImage,
    Header: RestaurantHeader,
    Specialties: RestaurantSpecialties,
    Info: RestaurantInfo,
    Content: RestaurantContent,
});

export default RestaurantCard;

// Exportações individuais
export {
    RestaurantImage,
    RestaurantHeader,
    RestaurantSpecialties,
    RestaurantInfo,
    RestaurantContent,
};

// Exportações dos demos
export { CompoundPatternsDemo } from "./CompoundPatternsDemo";
export { AdvancedCompoundDemo } from "./AdvancedCompoundDemo";
export { PracticalUsageDemo } from "./PracticalUsageDemo";

// Exportações de tipos
export * from "./types";
