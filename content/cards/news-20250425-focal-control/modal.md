---
id: news-20250425-focal-control
---
# New Paper "Focal Control of Non-Invasive Deep Brain Stimulation Using Multipolar Temporal Interference"

Temporal interference stimulation works by applying high-frequency currents via skin electrodes to non-invasively stimulate deep regions of the brain. A recent paper reports the use of multiple carrier frequencies targeting the same region to achieve higher intensity and improved focality. The authors refer to this TI variant as multipolar temporal interference (mTI).

In their study, the authors combined multiple electrode channels and different carrier frequencies (in the range between 975 – 4025 Hz) to create several overlapping amplitude-modulated fields. Rather than using one envelope as in standard TI, this allowed them to control the size and location of the stimulated area more precisely while keeping unwanted side effects – such as scalp sensations or off-target brain stimulation – to a minimum.

Validated in both mice and rhesus macaques, mTI successfully evoked neural activity in deep and small brain structures, such as the superior colliculus, without measurable discomfort or behavioral side effects. The method scales well across different brain sizes and shows promise for both future clinical applications and neuroscience research.

Our TIBS-R system is designed to allow any TI variants, including mTI:
- 8 fully differential, synchronized channels
- frequencies from direct current (DC) up to 100 kHz
- advanced waveform control, including phase modulation
- high precision and synchronization and software integration with Python and MATLAB
- EEG & fMRI compatibility, including closed-loop applications

For more detailed specifications on the TIBS-R system see {{< modal-link TIBS-R-system >}}here{{< /modal-link >}}.

Link to publication: Bioelectronic Medicine 2025, Volume 11, Article number 7, online 27 March 2025, [doi: 10.1186/s42234-025-00169-6](https://bioelecmed.biomedcentral.com/articles/10.1186/s42234-025-00169-6)

{{< modal-image Botzanowski-paper-TI-adding-2-frequencies.jpg >}} 
{{< /modal-image >}}

Fig. 1 - Principle of multipolar temporal interference and increased focality in non-human primates. A TI: Adding two frequencies to create an envelope – Two equal amplitude sinusoidal signals at 1975 Hz and 2025 Hz interact to create a 50 Hz amplitude modulated signal. B mTI: Adding two envelopes to create a greater envelope – The first 50 Hz envelope signal is created from the interaction of 1975 and 2025 Hz signals, the second from 2975 and 3025 Hz. When the two envelopes are added, a larger 50 Hz envelope is created. The maximum modulation occurs at the center of the circle (yellow area). C mTI: Reducing the amplitude to that of the original TI envelope increases focality – The amplitude from the electrode pairs is reduced to create an envelope amplitude equal to the original standard TI envelope with only two frequencies. The focality will increase compared to the standard TI, while maintain the AM maximum of the standard TI. D Classic TI and measurements a macaque monkey – 3D reconstruction of the skull of the macaque monkey (CT scan) with depth electrodes used to record the TI amplitude modulation. The region of strong amplitude modulation is found to be subcortical with TI using two high frequencies, but the focality is limited. Modulation index is calculated as follow MI = 1-(min/max)), also illustrated in Fig. 2A. Position of stimulation electrodes (skin) are shown as pink circles around the skull. Red arrow shows the contact of the electrode which recorded the maximum MI. E. mTI and measurements in a macaque monkey – The focality of the AM signal compared to D is improved with mTI using 8 frequencies to create 4 overlapping envelopes, where the amplitude from the pairs of carrier frequencies have been reduced to create an envelope with equal amplitude to D, which results in a more focal spatial profile. As in 1D, the position of stimulation electrode (skin) are shown as pink, blue, red and green circles around the skull. Red arrow shows the electrode which recorded the maximum MI.
