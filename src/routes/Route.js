import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound'
import Auth from '../views/Auth';
import CloudOnboarding from '../views/CloudOnboarding';
import DesiredOutComes from '../views/DesiredOutcomes';
import DeviceApplication from '../views/DeviceApplication';
import SolutionBuilder from '../views/SolutionBuilder';
import DiscoveryInventory from '../views/DiscoveryInventory';
import RiskSimulation from '../views/RiskSimulation';
import BusinessSimulation from '../views/BusinessSimulation';
import Multifactor from '../views/Multifactor';
import Policy from '../views/Policy';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
            <RouteSwitch>
                    <Route exact path="/" element={<Auth />}></Route>
                    <Route exact path="/Multifactor" element={<Multifactor />}></Route>
                    <Route exact path="/cloud-onboarding" element={<CloudOnboarding />}></Route>
                    <Route exact path="/desired-outcomes" element={<DesiredOutComes />}></Route>
                    <Route exact path="/device-application" element={<DeviceApplication />}></Route>
                    <Route exact path="/solution-builder" element={<SolutionBuilder />}></Route>
                    <Route exact path="/discover-inventory" element={<DiscoveryInventory />}></Route>
                    <Route exact path="/risk-simulation" element={<RiskSimulation />}></Route>
                    <Route exact path="/business-simulation" element={<BusinessSimulation />}></Route>
                    <Route exact path="/Policy-Generator" element={<Policy />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
            </Router>
        </div>
    )
}