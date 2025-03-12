---
id: Safety
---

# Ensuring Safety in TI Stimulation

Two key questions have been addressed in recent studies:
- What are the fundamental safety boundaries for temporal interference (TI) stimulation?
- How can patient safety be ensured for those with implanted medical devices?

These studies have been described in three recent scientific publications by TI Solutions’ partner organization, the IT’IS Foundation, that combine advanced computational modeling and experimental validation to probe non-invasive brain stimulation (NIBS) safety. The first two articles are companion papers in which quantitative guidelines for the safe application of TI stimulation^1^,^2^ are proposed, while the third is an assessment of NIBS safety in the presence of conductive implants^3^.

## Setting the Boundaries: TI Stimulation Safety Framework

The two-part investigation of TI stimulation safety represents the first systematic effort to establish quantitative safety guidelines for this emerging technology. In TI stimulation, unlike in conventional brain stimulation, two high-frequency electric (E-)fields are applied through scalp electrodes at slightly different frequencies (e.g., 10.00 kHz and 10.01 kHz). While these frequencies are themselves too high to directly stimulate neurons, their interaction creates a low-frequency – in this case 10 Hz – modulation envelope that can influence neural activity at targeted locations deep in the brain. Using advanced computational modeling, the IT’IS team systematically simulated various NIBS exposure scenarios, including TI stimulation, transcranial alternating current stimulation (tACS), and deep brain stimulation (DBS), in a detailed model of the head and brain. By matching field exposure magnitudes across the three stimulation modalities, they calculated TI stimulation parameters that produce conditions known to be safe for tACS and DBS and used these to establish thresholds for the safe application of TI stimulation.

{{< modal-image TI-Solutions-safety-table-V2-3000px.jpg >}}
{{< /modal-image >}} 

***Proposed safety thresholds for TI stimulation by exposure metric (3 cm^2^ electrodes)^2^.** TI stimulation can be safely used to apply currents of up to 7 mA at frequencies below 2.5 kHz. At frequencies above 2.5 kHz, safe current levels increase linearly with frequency. To avoid unsafe brain tissue heating, no more than 14 mA should be applied at any frequency.*

Notably, TI stimulation allows for significantly higher thresholds compared to conventional stimulation methods due to reduced skin sensations at higher frequencies. Also, temperature increases remain well below critical thresholds, with brain tissue heating limited to 0.2°C even at the maximum recommended current. Skin heating stays well below the limits of 2°C set by the U.S. Food and Drug Administration (FDA), ensuring effective blinding conditions and enhancing comfort in experimental and clinical settings. Moreover, TI stimulation permits increased E-field focality compared to conventional stimulation, allowing the targeting of deep brain regions with minimal activation of overlying cortical areas.

The practical implementation of TI stimulation demands careful consideration of several additional parameters to ensure optimal safety and efficacy. Electrode size should be selected based on the intended target depth and desired focality, with sufficient separation between electrodes to prevent unwanted field interactions. Also, TI stimulation requires careful ramping protocols to avoid transient neural effects during stimulation onset. Finally, simulations should be performed prior to applying TI stimulation to improve focality, ensure safety in light of anatomical variation, and account for special circumstances such as the presence of conductive implants.

{{< modal-image Fig1-comparing-TI-stimulation-and-tES.jpg >}}
{{< /modal-image >}} 

***Comparison of TIS and transcranial electrical stimulation (tES).** Comparison between conventional single tES (left) and total TI stimulation high frequency E-field exposure (center), as well as the corresponding low-frequency TI stimulation modulation magnitude distribution (right). The total TI stimulation carrier frequency E-field map (center) shows the maximal high-frequency field magnitude achieved for in-phase, constructive interference.*

{{< modal-image simulated-steady-state.jpg >}}
{{< /modal-image >}}  

***Simulated steady-state temperature increase distributions for DBS and tES.** Input current of 1 mA, bipolar electrode configuration (top-left) with various electrode sizes. Heating is principally localized near the electrodes, such that brain heating is minimal for tES. In all cases, heating is well below published thresholds for direct tissue damage.*

## Managing Implant Interactions

A parallel investigation was focused on the specific challenges posed by metallic implants, such as DBS electrodes or recording devices, in the context of NIBS^3^. The analysis revealed that field enhancement effects near implanted conductors can reach factors of up to 10-fold for typical implant geometries, with enhancement scaling proportionally to conductor length in elongated implants. Importantly, while these local field concentrations are significant, they generally remain below neural activation thresholds during NIBS. We also discovered that the formation of scar tissue around implants actually helps reduce enhancement effects in the surrounding brain tissue.

Four critical mechanisms were evaluated:
- local field enhancement near metallic contacts
- capacitive effects in implant leads
- thermal considerations, particularly at higher frequencies
- special cases, including abandoned leads and damaged insulation

This comprehensive understanding of field-implant interactions enables precise, patient-specific optimization of stimulation parameters.

{{< modal-image Fig3-anatomical-model-validation.jpg >}}
{{< /modal-image >}}

***Anatomical model validation of the enhancement factor approach.** (a) Illustration of the IXI025 head model (29 different tissue classes, isotropic material properties), with a transverse E-field slice overlay depicting transcranial direct current stimulation (tDCS) with implanted stereoelectroencephalography (SEEG) electrodes, (b) E-field magnitude distribution on a slice containing an SEEG electrode, and (c) zoomed E-field distribution near the SEEG implant.*

## From Research to Clinical Practice

These scientific insights have been directly incorporated into our {{< modal-link TIBS-R-system >}}TIBS-R system{{< /modal-link >}}, which includes hardware-level current limiting that automatically enforces safety boundaries while providing real-time impedance monitoring to ensure reliable electrode contact. Working in concert with TIBS-R, {{< modal-link TIP >}}TIP{{< /modal-link >}} – a dedicated platform for TI stimulation planning with TIBS-R – offers a streamlined, web-accessible tool for personalized TI planning and optimization. Finally, {{< modal-link sim4life >}}Sim4Life{{< /modal-link >}} provides detailed, subject-specific safety assessments, with particular attention to field-implant interactions. Together, these tools offer researchers and clinicians automated enforcement of safety guidelines, subject-specific and risk-minimized TI stimulation optimization, real-time monitoring and adjustment capabilities, and complete documentation for regulatory compliance.

## Looking Ahead

As brain stimulation applications continue to evolve, research by the IT'IS team ensures they can be delivered safely in research and clinical studies. Through continued research and development, we are committed to advancing the field of NIBS while maintaining the highest safety standards. The TIBS-R system, TIP, and Sim4Life platform provide researchers and clinical scientists with the tools they need to deliver TI stimulation safely and effectively.


## References

1. Cassarà AM *et al. Recommendations for the Safe Application of Temporal Interference Stimulation in the Human Brain Part I: Principles of Electrical Neuromodulation and Adverse Effects.* Bioelectromagnetics. 2025; 46:e22542. [doi:10.1002/bem.22542](https://onlinelibrary.wiley.com/doi/full/10.1002/bem.22542)
2. Cassarà AM *et al. Recommendations for the Safe Application of Temporal Interference Stimulation in the Human Brain Part II: Biophysics, Dosimetry, and Safety Recommendations.* Bioelectromagnetics. 2025; 46:e22536. [doi:10.1002/bem.22536](https://onlinelibrary.wiley.com/doi/full/10.1002/bem.22536)
3. Karimi F *et al. Safety of Non-Invasive Brain Stimulation in Patients with Implants: A Computational Risk Assessment.* J Neural Eng. 2025; 22:016039. [doi: 10.1088/1741-2552/ad8efa](https://iopscience.iop.org/article/10.1088/1741-2552/ad8efa)
