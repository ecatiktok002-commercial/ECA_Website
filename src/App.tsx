/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import GigEconomy from './components/GigEconomy';
import Tourism from './components/Tourism';
import FleetManagement from './components/FleetManagement';
import Marketing from './components/Marketing';
import DigitalArchitect from './components/DigitalArchitect';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="selection:bg-secondary-container selection:text-primary min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GigEconomy />
        <Tourism />
        <FleetManagement />
        <Marketing />
        <DigitalArchitect />
      </main>
      <Footer />
    </div>
  );
}
