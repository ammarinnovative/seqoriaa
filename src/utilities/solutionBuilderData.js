import Amazon from '../assets/images/companies/amazon.png'
import AmazonWhite from '../assets/images/companies/amazon-white.png'
import Google from '../assets/images/companies/google.png'
import GoogleWhite from '../assets/images/companies/google-white.png'
import Azure from '../assets/images/companies/azure.png'
import AzureWhite from '../assets/images/companies/azure-white.png'

const hostCloud = [
    { id: 1, image: Amazon, imageWhite: AmazonWhite, name: 'Amazon' },
    { id: 2, image: Azure, imageWhite: AzureWhite, name: 'Azure' },
    { id: 3, image: Google, imageWhite: GoogleWhite, name: 'Google' }
]

const solutionAmzaonOpt = [
    { id: 1, name: 'CSPM' },
    { id: 2, name: 'Incident Response' },
    { id: 3, name: 'Ransomware' },
    { id: 4, name: 'Data Protection' },
    { id: 5, name: 'Disaster Recovery' },
    { id: 6, name: 'Cloud Resources Inventory' },
    { id: 7, name: 'Software Patching, Vulnerability Management' },
    { id: 8, name: 'Continuous Monitoring' },
    { id: 9, name: 'Fine-grained Access Control' },
]

const solutionAzureOpt = [
    { id: 1, name: 'CSPM' },
    { id: 2, name: 'Incident Response' },
    { id: 3, name: 'Ransomware' },
    { id: 4, name: 'Data Protection' },
    { id: 5, name: 'Disaster Recovery' },
    { id: 6, name: 'SIEM' },
    { id: 7, name: 'Cloud Resources Inventory' },
    { id: 8, name: 'Software Patching, Vulnerability Management' },
    { id: 9, name: 'Continuous Monitoring' },
    { id: 10, name: 'Fine-grained Access Control' },
    { id: 11, name: 'End-Point Threat Detection' },
]


export { hostCloud, solutionAmzaonOpt, solutionAzureOpt }