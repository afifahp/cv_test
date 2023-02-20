import { Heading , Stack } from '@chakra-ui/layout'
import { Text, Box , Divider, Progress, Badge} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Card, CardHeader , CardBody } from '@chakra-ui/react'
import penguBaby from '../assets/babypengu.jpg'
import '../style/App.css'

function App() {
  return (
    <Box maxW='sm' borderWidth='2px' borderRadius='lg' borderColor='#F0E6EF'>
        <div className="App">
          <div>
            <img src={penguBaby} className="Profile Picture" alt="Baby Penguin"  />
          </div>
          <h1>Afifah Putri Witjaksono</h1>
          <p>"A Software Engineer student in Bina Insani University, Bekasi, Indonesia. Love to create 3D Mini Interior, self made desktop organiser wallpaper, 2D Character Design chibi, anime and semi realism style. Currently upgrading 3D Modelling skills."</p>
        </div>
      <Card>
        <CardHeader>
          <Heading as='h2' size='xl'>
              About Her
          </Heading>
        </CardHeader>
        <Divider orientation='horizontal' color='white' />
        <CardBody>
          <Stack spacing='4' alignItems='left'>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      "Experiences"
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>
                      <Heading as='h3'>PANTRY - COOK, TUGU KUNSTKRING PALEIS</Heading>
                      <h5>DEC 2013 - APRIL 2014</h5>
                      <Text textAlign='justify'>Producing food and desserts order for customers and stocks, food plating and food garnishing for customers.</Text>
                    </ListItem>
                    <ListItem> 
                      <Heading as='h3'>PASTRY, DOCCO COFFEE and TEA</Heading>
                      <h5>JULY 2014 - OCT 2015</h5>
                      <Text textAlign='justify'>Producing Cake and desserts to deliver to the outlets, handling ingredients stock, Input weekly and monthly stock reports, food cost and new recipes.</Text>
                    </ListItem>
                    <ListItem> 
                      <Heading as='h3'>PRODUCTION STAFF, TUKANGROTI.COM</Heading>
                      <h5>JAN 2017 - OCT 2018</h5>
                      <Text textAlign='justify'>Manage Buns and Creams Stock for outlets, Producing Cream for buns, Handling Ingredients Stock, Coordinating team based on job description, Handling products delivery to the outlets.</Text>
                    </ListItem>
                    <ListItem> 
                      <Heading as='h3'>SALES ADMIN, PONDOK GEMES</Heading>
                      <h5>NOV 2018 - MAR 2019</h5>
                      <Text textAlign='justify'>Serve the customers' order and process it in a system based on SOP, Input the snacks order for customers.</Text>
                    </ListItem>
                    <ListItem> 
                      <Heading as='h3'>PRODUCT APPLICATOR, PT TRABAUD AROMATIC LABORATORIES</Heading>
                      <h5>MAY 2019 - AUG 2021</h5>
                      <Text textAlign='justify'>Applying new aromatic products to the foods and beverages based on the specifies amount, Do the research for the taste and aroma on the product, Collect the result of the research for the reports</Text>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      "Skills"
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem> Voice Over 
                      {/* <Progress hasStripe value={60} colorScheme='#ffc8dd' /> */}
                    </ListItem>
                    <ListItem> Public Speaking - English</ListItem>
                    <ListItem> Character Design</ListItem>
                    <ListItem> Blender</ListItem>
                    <ListItem> Adobe Illustrator</ListItem>
                    <ListItem> Adobe Potoshop</ListItem>
                    <ListItem> Chibi Art</ListItem>
                    <ListItem> Semi-Realism</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      "Education"
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>
                      <Heading as='h3'>HOTEL AND RESTAURANT MANAGEMENT, SMK PARAMITHA 1 JAKARTA</Heading>
                      <h5>AUG 2010 - JUNE 2013</h5>
                      <Text>Learned about How to serve guests in Hotel from the Front Office section, Housekeeping, Food and Beverage Service and Products.</Text>
                    </ListItem>
                    <ListItem> 
                      <Heading as='h3'>REKAYASA PERANGKAT LUNAK, UNIVERSITAS BINA INSANI</Heading>
                      <h5>SEPT 2021 - Present</h5>
                      <Text>Learning Network Configuration, Programming Language, Program Development, Graphic Design, UI/UX Development.</Text>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      "Language"
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem> English - Intermediate</ListItem>
                    <ListItem> Indonesian - Native</ListItem>
                    <ListItem> French - Beginner</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default App
