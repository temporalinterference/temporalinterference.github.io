---
id: Safety
---
# Ensuring Safety in Next-Generation Non-Invasive Brain Stimulation

Non-invasive brain stimulation (NIBS) is rapidly transforming the landscape of neurological and psychiatric treatments<sup>1</sup>. In particular, temporal interference stimulation (TIS), introduced in 2017, allows for targeted neuromodulation of deep brain structures<sup>2</sup>. However, two critical questions arise: First, what are the fundamental safety boundaries for TIS? And second, how can we ensure safety for the growing population of patients with conductive implanted medical devices that may distort and/or amplify the electric (E-) fields induced by NIBS?

The team of TI Solutions partner organization [IT’IS Foundation](https://www.itis.swiss/), has tackled these questions head-on through a series of investigations described in three recent scientific publications that combine advanced computational modeling and experimental validation to probe NIBS safety. The first two articles are companion papers in which quantitative guidelines for the safe application of TIS<sup>3,4</sup> are proposed, while the second is an assessment of NIBS safety in the presence of conductive implants<sup>5</sup>.

## Setting the Boundaries: TIS Safety Framework

The two-part investigation of TIS safety represents the first systematic effort to establish quantitative safety guidelines for this emerging technology. In TIS, unlike in conventional brain stimulation, two high-frequency E-fields applied through scalp electrodes at slightly different frequencies (e.g., 10.00 kHz and 10.01 kHz). While these frequencies are themselves too high to directly stimulate neurons, their interaction creates a low-frequency – in this case 10 Hz – modulation envelope that can influence neural activity at targeted locations deep in the brain. Using advanced computational modeling, the IT’IS team systematically simulated various NIBS exposure scenarios, including TIS, transcranial alternating current stimulation (tACS), and deep brain stimulation (DBS), in a detailed model of the head and brain. By matching field exposure magnitudes across the three stimulation modalities, we calculated TIS parameters that produce conditions known to be safe for tACS and DBS and used these to establish thresholds for the safe application of TIS.

INSERT TABLE

***Proposed safety thresholds for TIS by exposure metric (3 cm<sup>2</sup> electrodes)<sup>3</sup>:** TIS can safely apply currents up to 7 mA at frequencies below 2.5 kHz. Above 2.5 kHz, safe current levels increase linearly with frequency. No more than 14 mA should be applied at any frequency to avoid unsafe brain tissue heating.*

Notably, TIS allows for significantly higher thresholds compared to conventional stimulation methods due to reduced skin sensations at higher frequencies. Also, temperature increases remain well below critical thresholds, with brain tissue heating limited to 0.2°C even at the maximum recommended current. Skin heating stays well below the limits of 2°C set by the U.S. Food and Drug Administration (FDA), ensuring effective blinding conditions and enhancing comfort in experimental and clinical settings. Moreover, TIS permits increased E-field focality compared to conventional stimulation, allowing the targeting of deep brain regions with minimal activation of overlying cortical areas.

The practical implementation of TIS demands careful consideration of several additional parameters to ensure optimal safety and efficacy. Electrode size should be selected based on the intended target depth and desired focality, with sufficient separation between electrodes to prevent unwanted field interactions. Also, TIS requires careful ramping protocols to avoid transient neural effects during stimulation onset. Finally, simulations should be performed prior to applying TIS to improve focality, ensure safety in light of anatomical variation, and account for special circumstances such as the presence of conductive implants.

## Managing Implant Interactions

A parallel investigation was focused on the specific challenges posed by metallic implants, such as DBS electrodes or recording devices, in the context of NIBS<sup>5</sup>. The analysis revealed that field enhancement effects near implanted conductors can reach factors of up to 10-fold for typical implant geometries, with enhancement scaling proportionally to conductor length in elongated implants. Importantly, while these local field concentrations are significant, they generally remain below neural activation thresholds during NIBS. We also discovered that the formation of scar tissue around implants actually helps reduce enhancement effects in the surrounding brain tissue.

Four critical mechanisms were evaluated:
- local field enhancement near metallic contacts
- capacitive effects in implant leads
- thermal considerations, particularly at higher frequencies
- special cases including abandoned leads and damaged insulation

This comprehensive understanding of field-implant interactions enables precise, patient-specific optimization of stimulation parameters.

## From Research to Clinical Practice

These scientific insights have been directly incorporated into our TIBS-R system, which includes hardware-level current limiting that automatically enforces safety boundaries while providing real-time impedance monitoring to ensure reliable electrode contact. Working in concert with TIBS-R, {{< modal-link ti-planning-tool >}}TIP{{< /modal-link >}} – a dedicated platform for TIS planning with TIBS-R – offers a streamlined, web-accessible tool for personalized TI planning and optimization. Finally, {{< modal-link Sim4Life >}}Sim4Life{{< /modal-link >}} provides detailed, subject-specific safety assessments, with particular attention to field-implant interactions. Together, these tools offer researchers and clinicians automated enforcement of safety guidelines, subject-specific and risk-minimized TIS optimization, real-time monitoring and adjustment capabilities, and complete documentation for regulatory compliance.

## Looking Ahead

As brain stimulation applications continue to evolve, our research ensures they can be delivered safely in research and clinical studies. Through continued research and development, we are committed to advancing the field of NIBS while maintaining the highest safety standards. The TIBS-R system, TIP, and Sim4Life platform provide researchers and clinical scientists with the tools they need to deliver TIS safely and effectively.

**ADD FIGURE 1**  
***Comparing TIS and tES:** Comparison between conventional single pair transcranial electric stimulation (tES, left) and total TIS high frequency E-field exposure (middle), as well as the corresponding low-frequency TIS modulation magnitude distribution (right). The total TIS carrier frequency E-field map (middle) shows the maximal high frequency field magnitude achieved for in-phase, constructive interference.*


{{< modal-image simulated-steady-state.jpg >}}
{{< /modal-image >}}  
***Simulated steady-state temperature increase distributions for DBS and tES:** Input current of 1 mA, bipolar electrode configuration (top-left), various electrode sizes. Heating is principally localized near the electrodes, such that brain heating is minimal for tES. In all cases, heating is well below thresholds for direct tissue damage.*


**ADD FIGURE 3**  
***Anatomical model validation of the enhancement factor approach.** (a) Illustration of the IXI025 head model (29 different tissue classes, isotropic material properties), with a transverse E-field slice overlay depicting transcranial direct current stimulation (tDCS) with implanted stereoelectroencephalography (SEEG) electrodes. (b) E-field magnitude distribution on a slice containing an SEEG electrode, and (c) zoomed E-field distribution near the SEEG implant.*


## Reference

1.	Polanía R *et al. Studying and Modifying Brain Function With Non-Invasive Brain Stimulation.* Nature Neuroscience. 21:174–187. https://doi.org/10.1038/s41593-017-0054-4
2.	Grossman N *et al. Noninvasive Deep Brain Stimulation via Temporally Interfering Electric Fields.* Cell. 2017; 169:1029-1041.e16. https://doi.org/10.1016/j.cell.2017.05.024
3. Cassarà AM *et al. Recommendations for the Safe Application of Temporal Interference Stimulation in the Human Brain Part I: Principles of Electrical Neuromodulation and Adverse Effects.* Bioelectromagnetics. 2025; 46:e22542. doi:10.1002/bem.22542
4. Cassarà AM *et al. Recommendations for the Safe Application of Temporal Interference Stimulation in the Human Brain Part II: Biophysics, Dosimetry, and Safety Recommendations.* Bioelectromagnetics. 2025; 46:e22536. doi:10.1002/bem.22536
5. Karimi F *et al. Safety of Non-Invasive Brain Stimulation in Patients with Implants: A Computational Risk Assessment.* J Neural Eng. 2025; 22:016039. doi: 10.1088/1741-2552/ad8efa
