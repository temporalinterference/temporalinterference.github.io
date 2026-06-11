---
id: TIP
---
# TIP V5.2

## Temporal Interference Planning Tool of IT'IS

The Temporal Interference Planning (TIP) tool of the [IT'IS Foundation](https://itis.swiss), developed for TIBS-R, provides an advanced planning environment for temporal interference (TI) stimulation. TIP supports electrode placement, stimulation targeting, electromagnetic simulations, optimization, visualization, and analysis using established and personalized anatomical human and animal models. Read more on the [IT'IS TI Planning webpage](https://itis.swiss/tools-and-systems/ti-planning/overview/).

TIP enables researchers to design and validate TI stimulation protocols without requiring deep expertise in computational modeling. It supports classic TI, multi-channel TI, and phase-modulation TI workflows, and is fully compatible with the TIBS-R system.

TIP V5.2 delivers a focused overhaul of the surrogate-model-based optimizer (SuMo) at the heart of TIP's electrode configuration search. All of the advanced features of TIP V5.0 are preserved, i.e., privacy-first local personalization, full Sim4Life workbench access in the Exposure Analysis step, and faster optimization, while three synergistic improvements produce higher-quality, richer Pareto fronts and give users direct control over the trade-off between speed and thoroughness:

* Native Constraint Handling: Impractical electrode configurations, such as two channels that share the same electrode, are now eliminated directly at the level of the algorithm, so that every configuration on the Pareto front is physically deployable.

* Parallel Multi-Seed Optimization: Six independent searches run in parallel and are merged into a single, denser and richer Pareto front that covers the optimal trade-off surface more effectively, without increasing optimization time.

* Adaptive Convergence: The optimizer stops automatically once convergence is reached, allowing the user to choose the precision level – low, medium, or high – that best fits the workflow.

TIP remains available through the TI Solutions Early Adopter Program and IT'IS research partnerships. Precomputed models can be explored without personalized simulation costs; personalized models require AWS simulation costs.

## Privacy-First Personalization

{{< modal-image tip_1.jpg >}}
{{< /modal-image >}}

Use subject-specific magnetic resonance imaging (MRI) and optional diffusion tensor imaging data to create personalized anatomical models for TI planning.

With TIP V5.2, MRI processing can run locally using the offline personalizer. Raw MRI data stay on the user's computer; only the anonymized, segmented model is uploaded to TIP.

## Electromagnetic Simulations

{{< modal-image tip_2.jpg >}}
{{< /modal-image >}}

Generate isotropic or anisotropic electromagnetic simulations using precomputed or personalized models.

TIP prepares the field data needed for optimization, exposure assessment, and downstream analysis.

## Configuration

{{< modal-image tip_3.jpg >}}
{{< /modal-image >}}

Select the anatomical model, stimulation target, and threshold definitions.

Standardized 10–10 electrode placement supports reproducible planning while keeping the optimization search space manageable.

## Optimal Configuration Identification

{{< modal-image tip_4.jpg >}}
{{< /modal-image >}}

Identify high-performing electrode configurations with the surrogate-model-based optimizer (SuMo).

In TIP V5.2, native constraint handling keeps the SuMo surface smooth and ensures every configuration on the Pareto front is physically deployable, parallel multi-seed execution delivers denser and richer Pareto fronts, and adaptive convergence lets you select low, medium, or high precision to balance speed against thoroughness.

## Visualization and Post-Processing

{{< modal-image tip_5.jpg >}}
{{< /modal-image >}}

Visualize stimulation fields, phase modulation, pulse shapes, and field components.


## Full Sim4Life Exposure Analysis

{{< modal-image tip_6.jpg >}}
{{< /modal-image >}}

TIP V5.2 provides ready-to-use template projects with anatomical models, targets, electrodes, and preconfigured simulations for deeper exposure analysis in a full-featured Sim4Life instance, including rendering, masking, streamlines, derived quantities, and reporting. 

## Access

TIP V5.2 is available to members of the TI Solutions Early Adopter Program and IT'IS research partners. For access, support, or further information, contact [tip@itis.swiss](mailto:tip@itis.swiss) or [eap@temporalinterference.com](mailto:eap@temporalinterference.com).

## Disclaimer

TIP is a third-party tool developed by the [IT'IS Foundation](https://itis.swiss). Sim4Life is a third-party tool developed by [ZMT Zurich MedTech AG](https://zmt.swiss). We do not control or endorse these third-party tools. We do not assume any responsibility or give any assurance for the accuracy, functionality, availability, usability, applicability, or performance of the tools provided by IT'IS or ZMT and the results generated by these third-party tools, nor do we assume any responsibility for any potential issues or damages resulting from their use.

{{< modal-download TI-Solutions-TIP-flyer-web2.pdf >}}Download the TIP flyer here.{{< /modal-download >}}
