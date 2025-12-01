---
id: ICS
---
# ICS
{{< modal-image TI-Solutions-ICS.jpg >}}
{{< /modal-image >}}

## Intelligent Current Source (ICS)

The core component of the TIBS-R system is the battery-powered, 8-channel programmable high-impedance current source generating precise direct current (DC) and alternating current (AC) from 0 – > 100 kHz. To ensure superior electrical safety, the ICS is solely optically connected to the external world. The PC via optical Ethernet and other peripherals, including external trigger circuits, monitoring ports, and emergency stops, are also optically connected via fibers. 

## Signal Generation

The PC communicates with the ICS via a highly flexible scripting interface. Some commands pertain to the configuration of the ICS and others to the signals to be generated. The signals that can be generated broadly fall into two categories, i.e., sinusoids and arbitrary waveforms. All the signal data is checked for integrity and completeness and any errors are reported back to the operator.

The signals for all 8 channels are generated in the same Field Programmable Gate Array (FPGA) using Direct Digital Synthesis (DDS) architectures, ensuring synchronization across all the channels. The synthesized digital signals are converted to the analog domain using digital to analog converters (DAC). The DACs have a special architecture that allows control of the amplitude of the output current independent of the waveform providing simple control of the ramping at start and stop of an experiment to avoid transient effects.

## Safety Features

All current sources are fully differential allowing good control of the balance. At the output of the current source, monitoring circuits digitize the voltage and current and the relays that enable the output. Each channel can generate currents from DC to 100 kHz. To maintain operation within safe limits, frequency dependent hardware current limiters have been implemented based on the latest safety information available. Additionally, users can program lower current limits to meet specific experimental requirements.

An Electrode Connection Box (ECB) is connected to the ICS using a 3 m cable. The cable consists of eight individually screened twisted pairs for each of the eight current source channels and a shielded connection for the ground reference electrode. The ECB is made from plastic and houses the touch-proof electrode connectors, which are in turn connected to the cable via common mode and differential mode filters.

## Continous Operation

For continuous operation, our wireless power transfer solution (TI-WPT) can be connected between the ICS and ECB.

{{< modal-image TI-Solutions-ICS-angled-view.jpg >}}
{{< /modal-image >}}


