import "./App.css";
import { Text, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import DisplayEmployees from "./components/DisplayEmployees";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
        Employee Management
      </Text>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Employee List</Tab>
          <Tab>Add Employee</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DisplayEmployees />
          </TabPanel>
          <TabPanel>
            <AddEmployee />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
