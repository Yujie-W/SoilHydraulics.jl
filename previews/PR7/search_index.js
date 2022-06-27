var documenterSearchIndex = {"docs":
[{"location":"#SoilHydraulics.jl","page":"Home","title":"SoilHydraulics.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Soil hydraulics package.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using Pkg;\nPkg.add(\"SoilHydraulics\");","category":"page"},{"location":"API/#API","page":"API","title":"API","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = SoilHydraulics","category":"page"},{"location":"API/#Vulnerability-curve","page":"API","title":"Vulnerability curve","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"BrooksCorey{FT}(vg::VanGenuchten{FT}) where {FT<:AbstractFloat}\nsoil_θ\nsoil_θ(bc::BrooksCorey{FT}, ψ_25::FT) where {FT<:AbstractFloat}\nsoil_θ(vg::VanGenuchten{FT}, ψ_25::FT) where {FT<:AbstractFloat}\nsoil_ψ_25\nsoil_ψ_25(bc::BrooksCorey{FT}, θ::FT) where {FT<:AbstractFloat}\nsoil_ψ_25(vg::VanGenuchten{FT}, θ::FT) where {FT<:AbstractFloat}\nrelative_hydraulic_conductance\nrelative_hydraulic_conductance(bc::BrooksCorey{FT}, θ::FT) where {FT<:AbstractFloat}\nrelative_hydraulic_conductance(bc::BrooksCorey{FT}, ψ::Bool, ψ_25::FT) where {FT<:AbstractFloat}\nrelative_hydraulic_conductance(vg::VanGenuchten{FT}, θ::FT) where {FT<:AbstractFloat}\nrelative_hydraulic_conductance(vg::VanGenuchten{FT}, ψ::Bool, ψ_25::FT) where {FT<:AbstractFloat}","category":"page"},{"location":"API/#ClimaCache.BrooksCorey-Union{Tuple{VanGenuchten{FT}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"ClimaCache.BrooksCorey","text":"BrooksCorey{FT}(vg::VanGenuchten{FT}) where {FT<:AbstractFloat}\n\nA constructor for BrooksCorey to create BrooksCorey type soil from VanGenuchten type, given\n\nvg VanGenuchten type soil water retention curve\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.soil_θ","page":"API","title":"SoilHydraulics.soil_θ","text":"This function return the soil water content (not relative SWC). The supported methods are\n\nsoil_θ(bc, ψ_25)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:144.\n\nsoil_θ(vg, ψ_25)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:170.\n\n\n\n\n\n","category":"function"},{"location":"API/#SoilHydraulics.soil_θ-Union{Tuple{FT}, Tuple{BrooksCorey{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.soil_θ","text":"soil_θ(bc::BrooksCorey{FT}, ψ_25::FT) where {FT<:AbstractFloat}\n\nReturn the soil water content, given\n\nbc BrooksCorey type structure\nψ_25 Soil metric potential corrected to 25 Celcius\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.soil_θ-Union{Tuple{FT}, Tuple{VanGenuchten{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.soil_θ","text":"soil_θ(vg::VanGenuchten{FT}, ψ_25::FT) where {FT<:AbstractFloat}\n\nReturn the soil water content, given\n\nvg BrooksCorey type structure\nψ_25 Soil metric potential corrected to 25 Celcius\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.soil_ψ_25","page":"API","title":"SoilHydraulics.soil_ψ_25","text":"This function calculates soil metric potential from soil retention curve type and soil volumetric water potential. The supported methods are\n\nsoil_ψ_25(bc, θ)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:68.\n\nsoil_ψ_25(vg, θ)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:98.\n\n\n\n\n\n","category":"function"},{"location":"API/#SoilHydraulics.soil_ψ_25-Union{Tuple{FT}, Tuple{BrooksCorey{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.soil_ψ_25","text":"soil_ψ_25(bc::BrooksCorey{FT}, θ::FT) where {FT<:AbstractFloat}\n\nReturn the soil metric potential, given\n\nbc BrooksCorey type structure\nθ Soil volumetric water content (absolute value)\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.soil_ψ_25-Union{Tuple{FT}, Tuple{VanGenuchten{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.soil_ψ_25","text":"soil_ψ_25(vg::VanGenuchten{FT}, θ::FT) where {FT<:AbstractFloat}\n\nReturn the soil metric potential, given\n\nvg VanGenuchten type structure\nθ Soil volumetric water content (absolute value)\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"This function return the hydraulic conductance ralative to maximum. The supported methods are\n\nrelative_hydraulic_conductance(bc, θ)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:217.\n\nrelative_hydraulic_conductance(bc, ψ, ψ_25)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:244.\n\nrelative_hydraulic_conductance(vg, θ)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:274.\n\nrelative_hydraulic_conductance(vg, ψ, ψ_25)\n\ndefined at /home/runner/work/SoilHydraulics.jl/SoilHydraulics.jl/src/vulnerability.jl:301.\n\n\n\n\n\n","category":"function"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance-Union{Tuple{FT}, Tuple{BrooksCorey{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"relative_hydraulic_conductance(bc::BrooksCorey{FT}, θ::FT) where {FT<:AbstractFloat}\n\nReturn the relative hydraulic conductance of the soil, given\n\nbc BrooksCorey type structure\nθ Soil volumetric water content (absolute value)\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance-Union{Tuple{FT}, Tuple{BrooksCorey{FT}, Bool, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"relative_hydraulic_conductance(bc::BrooksCorey{FT}, ψ::Bool, ψ_25::FT) where {FT<:AbstractFloat}\n\nReturn the relative hydraulic conductance of the soil, given\n\nbc BrooksCorey type structure\nψ Bool to indicate that next parameter is potential\nψ_25 Soil metric potential at a reference temperature of 25 °C\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance-Union{Tuple{FT}, Tuple{VanGenuchten{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"relative_hydraulic_conductance(vg::VanGenuchten{FT}, θ::FT) where {FT<:AbstractFloat}\n\nReturn the relative hydraulic conductance of the soil, given\n\nvg VanGenuchten type structure\nθ Soil volumetric water content (absolute value)\n\n\n\n\n\n","category":"method"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance-Union{Tuple{FT}, Tuple{VanGenuchten{FT}, Bool, FT}} where FT<:AbstractFloat","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"relative_hydraulic_conductance(vg::VanGenuchten{FT}, ψ::Bool, ψ_25::FT) where {FT<:AbstractFloat}\n\nReturn the relative hydraulic conductance of the soil, given\n\nvg VanGenuchten type structure\nψ Bool to indicate that next parameter is potential\nψ_25 Soil metric potential at a reference temperature of 25 °C\n\n\n\n\n\n","category":"method"}]
}
