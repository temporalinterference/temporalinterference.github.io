---
Title: TIBS-R System
id: TIBS-R-V3-pop
---
# TIBS-R V3.2

{{< modal-image TIBS-setup2.jpg >}}
{{< /modal-image >}}

## TIBS-R Components

At the core of Temporal Interference Brain Stimulator for Research (TIBS-R) is the Intelligent Current Source (ICS) with unique specifications that can be connected to 3rd-party electrodes via an Electrode Connection Box (ECB). The ICS is controlled by a computer (PC) via an Application Programming Interface (API). Highly flexible scripting interfaces in multiple languages (e.g., Python, MATLAB) and custom-specific graphical user interfaces (GUIs) can be accessed in the Programming Window. Optical inputs and outputs are available for synchronization with external triggers (Trigger In/Out), e.g., electroencephalography (EEG) instruments. The modulation envelope is available as an analog signal (Envelope Out), e.g., to record with the EEG. The stimulation can be stopped at any time by pressing one of the two optically connected Emergency Stops.

## Real-Time Monitoring and Safety Features

All pertinent parameters and information, including stimulation protocol, currents, voltages, impedances, inputs, etc., are continuously recorded and displayed to the researchers on the monitoring window. TIBS-R is electrically isolated and compliant with the relevant standards. Any malfunction is automatically detected and puts the device in a non-stimulating state that requires self-validation before stimulation can be continued.

## EEG and MRI Compatibility

Concurrent EEG recording during TI stimulation requires our TI-EEG Solution that includes a high-pass filter (HPF) piggybacked to the ECB and an EEG system-specific low-pass filter (LPF) before the EEG amplifiers.

Concurrent functional magnetic resonance imaging (fMRI) requires our TI-MRI solution including special resistive electrodes and a different type of ECB. 

{{< modal-image TIBS-setup1.jpg >}}
{{< /modal-image >}}

---

## Specifications of TIBS-R V3.2 

|    |            |
|:-----------|:------------|
|Frequency Range|DC - 100 kHz |
|Waveforms|Sinusoid, phase modulation, frequency modulation, AWG* |
|Number of Channels Per Unit|8 synchronized, fully differential |
|EEG Compatibility|Brain Products, Geodesic*** |
|MRI Compatibility Option|Upon special request |
|Operation Time|>4 hrs active use on single battery charge, unlimited with WPT-TX/RX |
|Battery Charger|USB-C
|Peak Output Voltage|52 V differential** |
|Peak Output Current|5 mA max at ≤1.8 kHz**, 7 mA max at 2.5 kHz**, 14 mA max at ≥5 kHz** |
|Trigger / Sync Output|External instrument and synchronization (optical) |
|Trigger Input|Yes (digital, optical) |
|EEG Level Output of Excitation Envelope|Yes - optical |
|Sample Rate|1 MSamples/s |
|AWG Memory Depth|>2 Msamples 2 s* |
|Dynamic Range|>60 dB 10 µA - 10 mA |
|Precision / Resolution|16 bit, 1 µs, synchronous update |
|Total Harmonic Distortion|<0.05% |
|2nd Order Intermodulation|-110 dBc typical ≤-135 dBc*** |
|Ground Reference|Yes |
|Ground Current Monitoring|Yes |
|Monitoring - Currents / Voltages|Yes, synchronous sampling / logging of stimulation |
|Electrode Impedance Detection|Yes - online |
|Emergency Stop Button|Optical, suitable for MRI |
|Safety|Hardware-limited peak currents and voltages** |
|Control Unit|Optical connection to host PC |
|Compliance|IEC 62304:2006 + A1:2015, IEC 60601-1-6:2010 A1:2013 +A2:2020, ISO 14971:2007, IEC 60601-1-2:2014 + A1:2020 |
|Scripting|Python, MATLAB - others on request |
|Environment|+5 – +40°C |
|Instructions for Use|Yes |
|IP Protection - Patents|US 10173061, 10905878,11759634, EP 3204113, only in FR, DE, GB, IT, ES, FI, DK, BE, NL, CH and LI, CZ |
End of Life|December 2030 or later |

---

AWG: arbitrary waveform generator; EEG: electroencephalogram; MRI: magnetic resonance imaging; WPT-TX/RX: wireless power transfer option

*in future release only

**compliant with implemented safety concept (Cassarà AM et al. bioRxiv. 2022.12.15.520077; IEC standards)

***EEG solution provided by the IT'IS Foundation

Minimal PC specifications (PC not included): Windows 11 Pro, 16 GB RAM, UHD graphics, USB-C

