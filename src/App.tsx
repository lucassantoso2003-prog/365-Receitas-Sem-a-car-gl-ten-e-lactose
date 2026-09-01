/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBanner } from "./components/TopBanner";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { RecipeCards } from "./components/RecipeCards";
import { BonusSection } from "./components/BonusSection";
import { TargetAudience } from "./components/TargetAudience";
import { Gifts } from "./components/Gifts";
import { Offers } from "./components/Offers";
import { Reviews } from "./components/Reviews";
import { Guarantee } from "./components/Guarantee";
import { DeliveryMethods } from "./components/DeliveryMethods";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBanner />
      <Hero />
      <Benefits />
      <RecipeCards />
      <BonusSection />
      <TargetAudience />
      <Gifts />
      <Offers />
      <Reviews />
      <Guarantee />
      <DeliveryMethods />
      <FAQ />
      <Footer />
    </div>
  );
}
