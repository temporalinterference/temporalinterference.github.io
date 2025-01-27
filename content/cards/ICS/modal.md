---
Title: ICS
id: ICS-pop
---
# Intelligent Current Source (ICS)

The core of TIBS-R is the Intelligent Current Source, a battery-powered 8-channel programmable DC to 100 kHz current source connected optically to a PC and other peripherals, e.g., external trigger circuits, monitoring ports, and emergency stops. 
The PC sends commands to the ICS using a highly flexible scripting interface. Some commands pertain to the configuration of the ICS and others to the signals to be generated. The signals that can be generated broadly fall into two categories, i.e., sinusoids and arbitrary waveforms. All the signal data is checked for integrity and completeness and any errors are reported back to the operator.  
The signals for all 8 channels are generated in the same the FPGA using DDS architectures, this ensures synchronization across all the channels. The synthesized digital signals are converted to the analogue domain using digital to analogue converters (DAC) The DACs have a special architecture that allows control of the amplitude of the output current independent of the waveform providing simple control of the ramping at start and stop of an experiment to avoid transient effects. All current sources are fully differential allowing good control of the balance. At the output of the current source, monitoring circuits digitize the voltage and current and the relays that enable the output. Each channel can generate currents from DC to 100 kHz, to maintain operation within safe limits frequency dependent hardware current limiters have been implemented based on the best safety information available, further to this the user can program lower current limits as required.

An electrode connection box ECB is connected to the ICS using a 3m cable. The cable consists of eight individually screened twisted pairs for each of the eight current source channels and a shielded connection for the ground reference electrode. The ECB is made from plastic and houses the touch-proof electrode connectors, which are in turn connected to the cable via common mode and differential mode filters.
For continuous operation, the wireless power transfer solution is connected between the ICS and ECB.

{{< modal-image TI-Solutions-ICS-angled-view.jpg >}}
{{< /modal-image >}}

{{< modal-image TI-Solutions-ICS.jpg >}}
{{< /modal-image >}}
