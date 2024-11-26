---
Title: Specifications
id: specifications-pop
---
# Specifications
## TIBS-R V3.0

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

data:
  list:
    - Specifications:
    - Frequency Range: DC - 100 kHz
    - Waveforms: Sinusoid, phase modulation, frequency modulation, AWG*
    - Number of Channels Per Unit: 8 synchronized, fully differential
    - EEG Compatibility: "Brain Products, Geodesic#"
    - MRI Compatibility Option: "Upon special request"
    - Operation Time: ">4 hrs active use on single battery charge, unlimited with WPT-TX/RX"
    - Battery Charger: USB-C
    - Peak Output Voltage: "52 V differential**"
    - Peak Output Current: 5 mA max at ≤1.8 kHz**<br />7 mA max at 2.5 kHz**<br />14 mA max at ≥5 kHz**
    - Trigger / Sync Output: External instrument and synchronization (optical)
    - Trigger Input: Yes (digital, optical)
    - EEG Level Output of Excitation Envelope: Yes (optical)
    - Sample Rate: 1 MSamples/s
    - AWG Memory Depth: ">2 Msamples (2 s)*"
    - Dynamic Range: ">60 dB (10 µA - 10 mA)"
    - Precision / Resolution: 16 bit, 1 µs, synchronous update
    - Total Harmonic Distortion: <0.05%
    - 2nd Order Intermodulation: "-110 dBc typical (≤-135 dBc#)"
    - Ground Reference: "Yes"
    - Ground Current Monitoring: "Yes"
    - Monitoring - Currents / Voltages: Yes, synchronous sampling / logging of stimulation
    - Electrode Impedance Detection: Yes (online)
    - Emergency Stop Button: Optical, suitable for MRI
    - Safety: "Hardware-limited peak currents and voltages**"
    - Control Unit: "Optical connection to host PC"
    - Compliance: "IEC 60601-1:2005 + A1:2012 + A2:2020<br />IEC 62304:2006 + A1:2015<br />IEC 60601-1-6:2010 A1:2013 +A2:2020<br />ISO 14971:2007<br />IEC 60601-1-2:2014 + A1:2020"
    - Scripting: Python, MATLAB (others on request)
    - Environment: +5 – +40°C
    - Instructions for Use: "Yes"
    - IP Protection (Patents): US 10173061, 10905878,11759634<br />EP 3204113, only in FR, DE, GB, IT, ES, FI, DK, BE, NL, CH and LI, CZ
    - End of Life: December 2030 or later
    
  footnotes:
    - "AWG: arbitrary waveform generator; EEG: electroencephalogram; MRI: magnetic resonance imging; WPT-TX/RX: wireless power transfer option"
    - "* in future release only"
    - "** compliant with implemented safety concept (Cassara’ AM et al. bioRxiv. 2022.12.15.520077; IEC standards)"
    - "# EEG solution provided by the IT'IS Foundation"
    - "Minimal PC specifications (PC not included): Windows 11 Pro, 16 GB RAM, UHD graphics, USB-C"
