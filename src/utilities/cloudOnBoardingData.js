import { BsCloudDownload, BsFillPersonLinesFill, BsCameraVideo } from 'react-icons/bs'
import Amazon from '../assets/images/companies/amazon.png'
import AmazonWhite from '../assets/images/companies/amazon-white.png'
import Google from '../assets/images/companies/google.png'
import GoogleWhite from '../assets/images/companies/google-white.png'
import Azure from '../assets/images/companies/azure.png'
import AzureWhite from '../assets/images/companies/azure-white.png'
import Webex from '../assets/images/companies/webex.png'
import WebexWhite from '../assets/images/companies/webex-white.png'
import Arista from '../assets/images/companies/arista.png'
import AristaWhite from '../assets/images/companies/arista-white.png'
import Microsoft from '../assets/images/companies/microsoft.png'
import MicrosoftWhite from '../assets/images/companies/microsoft-white.png'
import Fortinet from '../assets/images/companies/fortinet.png'
import FortinetWhite from '../assets/images/companies/fortinet-white.png'
import Cisco from '../assets/images/companies/cisco.png'
import CiscoWhite from '../assets/images/companies/cisco-white.png'
import Paloalto from '../assets/images/companies/paloalto.png'
import PaloaltoWhite from '../assets/images/companies/paloalto-white.png'
import Zoom from '../assets/images/companies/zoom.png'
import ZoomWhite from '../assets/images/companies/zoom-white.png'
import Juniper from '../assets/images/companies/juniper.png'
import JuniperWhite from '../assets/images/companies/juniper-white.png'
import { GiChaingun } from 'react-icons/gi'
import { HiUserAdd } from 'react-icons/hi'

const cloudOptions = [
    { icon: BsCloudDownload, name: 'Host Cloud', },
    { icon: BsFillPersonLinesFill, name: 'Peer 1' },
    { icon: BsFillPersonLinesFill, name: 'Peer 2' },
    { icon: HiUserAdd, name: 'Additional Peers' }
]

const hostCloud = [
    { id: 1, image: Amazon, name: 'Amazon', imageWhite: AmazonWhite },
    { id: 2, image: Google, name: 'Google', imageWhite: GoogleWhite },
    { id: 3, image: Azure, name: 'Azure', imageWhite: AzureWhite },
    { id: 4, image: Webex, name: 'Webex', imageWhite: WebexWhite },
    { id: 5, name: 'Other Cloud' }
]

const otherCloud = [
    { id: 1, icon: GiChaingun, name: 'Production Account Configuration' },
    { id: 1, icon: BsFillPersonLinesFill, name: 'Dev Account Configuration' },
    { id: 1, icon: BsCameraVideo, name: 'Staging Account Configuration' },
]

const peer1 = [
    { id: 1, image: Google, name: 'Google', imageWhite: GoogleWhite },
    { id: 2, image: Webex, name: 'Webex', imageWhite: WebexWhite },
    { id: 3, image: Arista, name: 'Arista', imageWhite: AristaWhite },
    { id: 4, image: Azure, name: 'Azure', imageWhite: AzureWhite },
    { id: 5, image: Microsoft, name: 'Microsoft', imageWhite: MicrosoftWhite },
    { id: 6, image: Fortinet, name: 'Fortinet', imageWhite: FortinetWhite },
    { id: 7, image: Amazon, name: 'Amazon', imageWhite: AmazonWhite },
    { id: 8, image: Cisco, name: 'Cisco', imageWhite: CiscoWhite },
    { id: 9, image: Paloalto, name: 'Paloalto', imageWhite: PaloaltoWhite },
    { id: 10, image: Zoom, name: 'Zoom', imageWhite: ZoomWhite },
    { id: 11, image: Juniper, name: 'Juniper', imageWhite: JuniperWhite },
    { id: 12, name: 'Other Cloud' }
]

const peer2 = [
    { id: 1, image: Google, name: 'Google', imageWhite: GoogleWhite },
    { id: 2, image: Fortinet, name: 'Fotinet', imageWhite: FortinetWhite },
    { id: 3, image: Juniper, name: 'Juniper', imageWhite: JuniperWhite },
    { id: 4, image: Cisco, name: 'Cisco', imageWhite: CiscoWhite },
    { id: 5, image: Arista, name: 'Arista', imageWhite: AristaWhite },
    { id: 6, image: Webex, name: 'Webex', imageWhite: WebexWhite },
    // { id: 7, image: Arista, name: 'Arista', imageWhite: AristaWhite },
    { id: 8, image: Azure, name: 'Azure', imageWhite: AzureWhite },
    { id: 9, image: Microsoft, name: 'Microsoft', imageWhite: MicrosoftWhite },
    { id: 10, image: Zoom, name: 'Zoom', imageWhite: ZoomWhite },
    { id: 11, image: Amazon, name: 'Amazon', imageWhite: AmazonWhite },
    { id: 12, image: Paloalto, name: 'Paloalto', imageWhite: PaloaltoWhite },
]

export { cloudOptions, otherCloud, hostCloud, peer1, peer2 }