import d1 from '../assets/images/desired-icons/d1.svg'
import d2 from '../assets/images/desired-icons/d2.svg'
import d3 from '../assets/images/desired-icons/d3.svg'
import d4 from '../assets/images/desired-icons/d4.svg'
import d5 from '../assets/images/desired-icons/d5.svg'
import d6 from '../assets/images/desired-icons/d6.svg'
import d7 from '../assets/images/desired-icons/d7.svg'
import d8 from '../assets/images/desired-icons/d8.svg'
import d9 from '../assets/images/desired-icons/d9.svg'

const desiredOptions = [
    { id: 1, icon: d1, name: 'Cyber Resiliency', },
    { id: 2, icon: d2, name: 'Zero-Trust Posture Management', },
    { id: 3, icon: d3, name: 'Compliance', },
    { id: 4, icon: d4, name: 'Ransomware Protection', },
    { id: 5, icon: d5, name: 'Cyber-Insurance', },
    { id: 6, icon: d6, name: 'Hybrid/Multi-cloud Security', },
    { id: 7, icon: d7, name: 'Cloud/Security Skills Gap Assessment', },
    { id: 8, icon: d8, name: 'Vulnerability Management', },
    { id: 9, icon: d9, name: 'Enterprise Risk Tolerance', },
]

const desiredExecutors = [
    { name: 'Account Information (Rest API)' },
    { name: 'Get VMs Information (CLI)' },
    { name: 'CLI' },
    { name: 'Rest API' },
]

const desiredCompliance = [
    { name: 'S3 Access Vulnerability' },
    { name: 'Account MFA Enabled' },
    { name: 'Joined Host Before Login' },
]

export { desiredOptions, desiredExecutors, desiredCompliance };