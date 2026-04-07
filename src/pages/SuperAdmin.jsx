import React from 'react';
import { PLAN_CONFIG } from '../data/planConfig.js';
import { DEFAULT_DOCTOR_DATA } from '../data/initialState.js';

// âââ SuperAdmin Page Component âââââââââââââââââââââââââââââââââââââââââââââ
// Auto-extracted from App.jsx monolith
export const SuperAdmin = (props) => {
  const {
    view,
    setView,
    navStack,
    setNavStack,
    currentUser,
    setCurrentUser,
    loginAttempts,
    setLoginAttempts,
    loginBlockedUntil,
    setLoginBlockedUntil,
    privacidadAceptada,
    setPrivacidadAceptada,
    syncStatus,
    setSyncStatus,
    showSyncReport,
    setShowSyncReport,
    syncReport,
    setSyncReport,
    alertMsg,
    setAlertMsg,
    confirmConfig,
    setConfirmConfig,
    promptConfig,
    setPromptConfig,
    promptValue,
    setPromptValue,
    aiConfig,
    setAiConfig,
    showAIConfig,
    setShowAIConfig,
    aiStatus,
    setAiStatus,
    companies,
    setCompanies,
    usersList,
    setUsersList,
    patientsList,
    setPatientsList,
    savedReports,
    setSavedReports,
    savedBills,
    setSavedBills,
    atencionesCerradas,
    setAtencionesCerradas,
    doctorSignature,
    setDoctorSignature,
    auditLog,
    setAuditLog,
    activeTab,
    setActiveTab,
    data,
    setData,
    dataType,
    setDataType,
    isGenerating,
    setIsGenerating,
    isGeneratingRestr,
    setIsGeneratingRestr,
    isGeneratingReco,
    setIsGeneratingReco,
    saveStatus,
    setSaveStatus,
    _hcDirty,
    _setHcDirty,
    _exitHcConfirm,
    _setExitHcConfirm,
    patientSuggestions,
    setPatientSuggestions,
    historyNotification,
    setHistoryNotification,
    showRestriccionesPanel,
    setShowRestriccionesPanel,
    showHistoryModal,
    setShowHistoryModal,
    ripsModalData,
    setRipsModalData,
    backupModalData,
    setBackupModalData,
    hcChoiceAgenda,
    setHcChoiceAgenda,
    historyRecords,
    setHistoryRecords,
    patientSearchTerm,
    setPatientSearchTerm,
    genPatSearch,
    setGenPatSearch,
    examSearch,
    setExamSearch,
    examList,
    setExamList,
    showExamSuggs,
    setShowExamSuggs,
    diagExamen,
    setDiagExamen,
    justExamen,
    setJustExamen,
    printPreview,
    setPrintPreview,
    selectedCompanyReport,
    setSelectedCompanyReport,
    reporteActiveTab,
    setReporteActiveTab,
    certSelected,
    setCertSelected,
    reportStartDate,
    setReportStartDate,
    reportEndDate,
    setReportEndDate,
    reportAIResult,
    setReportAIResult,
    isGeneratingReport,
    setIsGeneratingReport,
    showExportTable,
    setShowExportTable,
    precioPorPaciente,
    setPrecioPorPaciente,
    showDianPanel,
    setShowDianPanel,
    dianProvider,
    setDianProvider,
    dianApiKey,
    setDianApiKey,
    billData,
    setBillData,
    savedBillsList,
    setSavedBillsList,
    portafolioItems,
    setPortafolioItems,
    portafolioForm,
    setPortafolioForm,
    portafolioEditId,
    setPortafolioEditId,
    cotizaciones,
    setCotizaciones,
    cotizacionForm,
    setCotizacionForm,
    cotizacionView,
    setCotizacionView,
    cotizacionSelId,
    setCotizacionSelId,
    cajaMovimientos,
    setCajaMovimientos,
    cajaForm,
    setCajaForm,
    cajaTab,
    setCajaTab,
    cajaFiltroPeriodo,
    setCajaFiltroPeriodo,
    cajaFiltroDesde,
    setCajaFiltroDesde,
    cajaFiltroHasta,
    setCajaFiltroHasta,
    contabTab,
    setContabTab,
    contabPeriodo,
    setContabPeriodo,
    asistenciaFecha,
    setAsistenciaFecha,
    evolucionForm,
    setEvolucionForm,
    showEvolucionModal,
    setShowEvolucionModal,
    selectedPackage,
    setSelectedPackage,
    packageChecklist,
    setPackageChecklist,
    showPackages,
    setShowPackages,
    newComp,
    setNewComp,
    ipsPerfilForm,
    setIpsPerfilForm,
    verificationCode,
    setVerificationCode,
    verificationFound,
    setVerificationFound,
    activeUserMgmtTab,
    setActiveUserMgmtTab,
    pendingActivationPlan,
    setPendingActivationPlan,
    sbCloudData,
    setSbCloudData,
    sbLoading,
    setSbLoading,
    newUserForm,
    setNewUserForm,
    userEditId,
    setUserEditId,
    editForm,
    setEditForm,
    propForm,
    setPropForm,
    selSvc,
    setSelSvc,
    propModulo,
    setPropModulo,
    mensajes,
    setMensajes,
    showMensajePanel,
    setShowMensajePanel,
    showConsentModal,
    setShowConsentModal,
    twoFAStep,
    setTwoFAStep,
    twoFAToken,
    setTwoFAToken,
    twoFAError,
    setTwoFAError,
    habeasRequests,
    setHabeasRequests,
    showHabeasModal,
    setShowHabeasModal,
    habeasForm,
    setHabeasForm,
    showPortalPublico,
    setShowPortalPublico,
    arlTab,
    setArlTab,
    svePrograma,
    setSvePrograma,
    sveFiltroEmpresa,
    setSveFiltroEmpresa,
    sveAIAnalisis,
    setSveAIAnalisis,
    sveAICargando,
    setSveAIAnalisisCargando,
    sveAIFiltroEmpresa,
    setSveAIFiltroEmpresa,
    arlForm,
    setArlForm,
    arlGuardados,
    setArlGuardados,
    showNotifModal,
    setShowNotifModal,
    notifData,
    setNotifData,
    portalCodigo,
    setPortalCodigo,
    portalPaciente,
    setPortalPaciente,
    portalMultiple,
    setPortalMultiple,
    epiEmpresa,
    setEpiEmpresa,
    epiPeriodo,
    setEpiPeriodo,
    epiTab,
    setEpiTab,
    teleconsultas,
    setTeleconsultas,
    teleForm,
    setTeleForm,
    teleSalaActiva,
    setTeleSalaActiva,
    teleTab,
    setTeleTab,
    mensajeRespuesta,
    setMensajeRespuesta,
    agendados,
    setAgendados,
    showAgenda,
    setShowAgenda,
    agendaForm,
    setAgendaForm,
    agendaSuggs,
    setAgendaSuggs,
    agendaTab,
    setAgendaTab,
    showComposeMensaje,
    setShowComposeMensaje,
    composeMensaje,
    setComposeMensaje,
    inactivityWarning,
    setInactivityWarning,
    inactivityCountdown,
    setInactivityCountdown,
    companiesTab,
    setCompaniesTab,
    editingCompany,
    setEditingCompany,
    cajaMedicoPeriodo,
    setCajaMedicoPeriodo,
    porcentajeMedico,
    setPorcentajeMedico,
    medicoTurnoActivo,
    setMedicoTurnoActivo,
    orgsList,
    setOrgsList,
    activeOrgId,
    setActiveOrgId,
    superAdminTab,
    setSuperAdminTab,
    newOrgForm,
    setNewOrgForm,
    portalEmpresaCodigo,
    setPortalEmpresaCodigo,
    portalEmpresaEncontrada,
    setPortalEmpresaEncontrada,
    portalEmpresaPacientes,
    setPortalEmpresaPacientes,
    portalEmpresaTab,
    setPortalEmpresaTab,
    portalEmpresaBuscando,
    setPortalEmpresaBuscando,
    portalEmpresaFiltroDoc,
    setPortalEmpresaFiltroDoc,
    portalActivadoInfo,
    setPortalActivadoInfo,
    portalEmpresaAdmin,
    setPortalEmpresaAdmin,
    portalAdminTab,
    setPortalAdminTab,
    portalAdminLoginUser,
    setPortalAdminLoginUser,
    portalAdminLoginPass,
    setPortalAdminLoginPass,
    nuevoMedicoEmpForm,
    setNuevoMedicoEmpForm,
    sedeForm,
    setSedeForm,
    ipsCredForm,
    setIpsCredForm,
    ipsEditingEmpId,
    setIpsEditingEmpId,
    handleAceptarPrivacidad,
    logAccess,
    exportPatientTable,
    fileInputRef,
    fileInputSigRef,
    csvInputRef,
    _inactivityRef,
    _warnRef,
    _cajaSaveTimer,
    showAlert,
    showConfirm,
    showPrompt,
    sessionUser,
    _initSess,
    applyCloud,
    handler,
    doAutoBackup,
    callAI,
    generateAIAnalysis,
    _tipoExamen,
    _contextoTipo,
    generateAIRestricciones,
    lista,
    generateAIRecomendaciones,
    generateAIGeneral,
    generateAIReport,
    fmtDist,
    handleChange,
    handleManualCloudSave,
    handleSaveAIConfig,
    _loadScoped,
    handleVerify2FA,
    canViewPatient,
    isHcOwner,
    openPatient,
    handleNewOccupHistory,
    handleNewGeneralHistory,
    _syncPatients,
    _syncCompanies,
    checkAlertasObligatorias,
    handleSavePatient,
    handleCloseHistory,
    _tipoConsulta,
    handleAiResumen,
    handleEditHistory,
    op,
    handleCompanySelect,
    handleDeletePatient,
    handleSignatureUpload,
    handleExportData,
    handleImportData,
    sigsRestored,
    billsR,
    repsR,
    closedPats,
    handleNameChange,
    selectPatientSuggestion,
    handleOpenHistoryModal,
    applyRestriccionesChecklist,
    applyRecomendacionesChecklist,
    handlePrint,
    _maybeExitHC,
    _goToDirect,
    goTo,
    _goBackDirect,
    goBack,
    renderNavbar,
    renderTabAdjuntos,
    renderTabSolicitudExamenes,
    renderTabIncapacidadGeneral,
    renderEvolucionModal,
    TabFormulaDerivacion,
    ConsentimientoModal,
    NotificacionModal,
    LoginForm,
    PortalPublicoTrabajador,
    AgendaFieldF,    // âââ Role guard helpers from sharedProps âââ
  _isAdmin,
  _isAdminEmpresa,
  _secretariaPuede,
  _canUse,
  _contarHC,

    ...rest
} = props;

    if (currentUser?.role !== "super_admin") {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white rounded-2xl p-8 shadow text-center">
            <p className="text-4xl mb-3">ð</p>
            <p className="font-black text-gray-700">
              Acceso restringido a Super Admin
            </p>
            <button
              onClick={() => goTo("dashboard")}
              className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-bold"
            >
              Volver al dashboard
            </button>
          </div>
        </div>
      );
    }

    const crearOrganizacion = async () => {
      if (!newOrgForm.orgName.trim() || !newOrgForm.adminUser.trim()) {
        showAlert(
          "â ï¸ Nombre de la organizaciÃ³n y usuario administrador son obligatorios."
        );
        return;
      }
      const orgId = _genOrgId(newOrgForm.orgName);
      const newOrg = {
        orgId,
        orgName: newOrgForm.orgName.trim(),
        orgNit: newOrgForm.orgNit.trim(),
        plan: newOrgForm.plan,
        createdAt: new Date().toISOString().split("T")[0],
        adminUser: newOrgForm.adminUser.trim(),
      };
      // Crear usuario administrador para la nueva org
      const adminPass = "Siso" + Date.now().toString(36) + "!";
      const { hash: pwHash, salt: pwSalt } = await _pbkdf2Hash(adminPass);
      const newAdmin = {
        id: Date.now(),
        user: newOrgForm.adminUser.trim(),
        name: newOrgForm.adminName.trim() || newOrgForm.adminUser.trim(),
        passHash: pwHash,
        passSalt: pwSalt,
        mustChangePassword: true,
        role: "administrador",
        orgId,
        license: newOrgForm.plan,
        licenseExpiry: "2099-12-31",
        licenseStarted: new Date().toISOString().split("T")[0],
        porcentajeHonorarios: 100,
        secretariaPermisos: { ...SECRETARIA_PERMISOS_DEFAULT },
        doctorData: { ...DEFAULT_DOCTOR_DATA },
      };
      const updOrgs = [...orgsList, newOrg];
      const updUsers = [...usersList, newAdmin];
      setOrgsList(updOrgs);
      setUsersList(updUsers);
      try {
        localStorage.setItem("siso_orgs_list", JSON.stringify(updOrgs));
      } catch {
        /**/
      }
      _sync("siso_users", JSON.stringify(updUsers));
      setNewOrgForm({
        orgName: "",
        orgNit: "",
        adminUser: "",
        adminName: "",
        adminEmail: "",
        plan: "pro",
      });
      showAlert(
        `â OrganizaciÃ³n "${newOrg.orgName}" creada.\n\n` +
          `Org ID: ${orgId}\n` +
          `Usuario admin: ${newAdmin.user}\n` +
          `ContraseÃ±a temporal: ${adminPass}\n\n` +
          `â ï¸ Anote la contraseÃ±a â no se mostrarÃ¡ de nuevo.`
      );
    };

    // EstadÃ­sticas por org
    const statsOrg = (orgId) => ({
      usuarios: usersList.filter((u) => u.orgId === orgId).length,
      pacientes: patientsList.filter(
        (p) => (p._orgId || ORG_DEFAULT_ID) === orgId && !p._archivado
      ).length,
      empresas: companies.filter((c) => (c.orgId || ORG_DEFAULT_ID) === orgId)
        .length,
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 font-sans p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-black text-purple-900 flex items-center gap-2">
                â­ Panel Global â Super Admin
              </h2>
              <p className="text-sm text-purple-600 mt-1">
                {orgsList.length} organizaciÃ³n
                {orgsList.length !== 1 ? "es" : ""} registrada
                {orgsList.length !== 1 ? "s" : ""}Â· {usersList.length} usuarios
                totales
              </p>
            </div>
            <button
              onClick={() => goTo("dashboard")}
              className="flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 bg-white px-3 py-2 rounded-lg shadow-sm"
            >
              â Volver al dashboard
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-purple-200 flex-wrap">
            {[
              { k: "orgs", l: "ð¢ Organizaciones" },
              { k: "nueva", l: "â Nueva Org" },
              { k: "ips", l: "ð¥ IPS / Empresas" },
              { k: "usuarios", l: "ð¥ Todos los usuarios" },
            ].map(({ k, l }) => (
              <button
                key={k}
                onClick={() => setSuperAdminTab(k)}
                className={`px-4 py-2 text-sm font-bold rounded-t-lg border-b-2 transition ${
                  superAdminTab === k
                    ? "border-purple-600 text-purple-700 bg-purple-50"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* TAB: Organizaciones */}
          {superAdminTab === "orgs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orgsList.map((org) => {
                const s = statsOrg(org.orgId);
                const isDefault = org.orgId === ORG_DEFAULT_ID;
                return (
                  <div
                    key={org.orgId}
                    className={`bg-white rounded-2xl p-5 shadow-sm border-2 ${
                      isDefault ? "border-purple-400" : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-black text-gray-800 text-base">
                          {org.orgName}
                        </h3>
                        {org.orgNit && (
                          <p className="text-xs text-gray-400">
                            NIT: {org.orgNit}
                          </p>
                        )}
                        <p className="text-[10px] font-mono text-purple-400 mt-0.5">
                          {org.orgId}
                        </p>
                      </div>
                      {isDefault && (
                        <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                          â­ Principal
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[
                        { v: s.usuarios, l: "Usuarios" },
                        { v: s.pacientes, l: "Pacientes" },
                        { v: s.empresas, l: "Empresas" },
                      ].map(({ v, l }) => (
                        <div
                          key={l}
                          className="text-center bg-gray-50 rounded-lg p-2"
                        >
                          <p className="text-lg font-black text-gray-700">
                            {v}
                          </p>
                          <p className="text-[10px] text-gray-400">{l}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          PLAN_CONFIG[org.plan]
                            ? `bg-${PLAN_CONFIG[org.plan].color}-100 text-${
                                PLAN_CONFIG[org.plan].color
                              }-700`
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {PLAN_CONFIG[org.plan]?.label || org.plan}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Creada: {org.createdAt}
                      </span>
                    </div>
                    {/* FASE 2: Empresas de esta org con multi-mÃ©dico */}
                    {(() => {
                      const orgsEmpresas = companies.filter(
                        (c) => (c.orgId || ORG_DEFAULT_ID) === org.orgId
                      );
                      if (orgsEmpresas.length === 0) return null;
                      return (
                        <div className="mt-3 border-t border-purple-100 pt-3">
                          <p className="text-[10px] font-black text-purple-700 uppercase mb-2">
                            ð¢ Empresas ({orgsEmpresas.length})
                          </p>
                          <div className="space-y-1.5">
                            {orgsEmpresas.slice(0, 5).map((emp) => {
                              const emMedicos =
                                emp.medicoIds ||
                                [emp.medicoResponsableId].filter(Boolean);
                              return (
                                <div
                                  key={emp.id}
                                  className="bg-white border border-purple-100 rounded-lg px-3 py-2"
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="text-xs font-black text-gray-800">
                                        {emp.nombre}
                                      </p>
                                      <p className="text-[10px] text-gray-500">
                                        NIT: {emp.nit}
                                        {emp.ciudad && ` Â· ${emp.ciudad}`}
                                      </p>
                                    </div>
                                    <div className="flex gap-1 flex-wrap justify-end">
                                      {emp.portalActivo && (
                                        <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">
                                          ð Portal
                                        </span>
                                      )}
                                      {(emp.sedes || []).length > 0 && (
                                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-bold">
                                          {(emp.sedes || []).length} sedes
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {emMedicos.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {emMedicos.slice(0, 3).map((uid) => {
                                        const m = usersList.find(
                                          (u) => u.user === uid
                                        );
                                        return (
                                          <span
                                            key={uid}
                                            className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-full"
                                          >
                                            ð¨ââï¸ {m?.name || uid}
                                          </span>
                                        );
                                      })}
                                      {emMedicos.length > 3 && (
                                        <span className="text-[10px] text-gray-400">
                                          +{emMedicos.length - 3} mÃ¡s
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                            {orgsEmpresas.length > 5 && (
                              <p className="text-[10px] text-gray-400 text-center">
                                +{orgsEmpresas.length - 5} empresas mÃ¡s
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                    {/* AuditorÃ­a: log acceso super_admin a org ajena */}
                    {!isDefault && (
                      <button
                        onClick={() => {
                          logAccess("SuperAdmin-AccesoOrg", org.orgId, "admin");
                          showAlert(
                            `ð Accediendo a datos de "${org.orgName}". AcciÃ³n registrada en auditorÃ­a.`
                          );
                        }}
                        className="mt-3 w-full text-xs bg-purple-50 text-purple-700 py-1.5 rounded-lg font-bold hover:bg-purple-100"
                      >
                        ð Ver datos (auditado)
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB: Nueva OrganizaciÃ³n */}
          {superAdminTab === "nueva" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 max-w-xl">
              <h3 className="font-black text-purple-800 text-lg mb-4">
                â Crear Nueva OrganizaciÃ³n
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Se generarÃ¡ automÃ¡ticamente un <code>org_id</code> Ãºnico y un
                usuario administrador con contraseÃ±a temporal.
              </p>
              <div className="space-y-3">
                {[
                  {
                    field: "orgName",
                    label: "Nombre de la organizaciÃ³n *",
                    placeholder: "Ej: ClÃ­nica San JosÃ© Pasto",
                  },
                  {
                    field: "orgNit",
                    label: "NIT de la organizaciÃ³n",
                    placeholder: "Ej: 900123456-1",
                  },
                  {
                    field: "adminUser",
                    label: "Usuario del administrador *",
                    placeholder: "Ej: dradmin_pasto",
                  },
                  {
                    field: "adminName",
                    label: "Nombre completo del admin",
                    placeholder: "Ej: Dr. Juan GarcÃ­a",
                  },
                  {
                    field: "adminEmail",
                    label: "Email del admin",
                    placeholder: "admin@clinica.com",
                  },
                ].map(({ field, label, placeholder }) => (
                  <div key={field}>
                    <label className="block text-xs font-bold text-gray-600 mb-1">
                      {label}
                    </label>
                    <input
                      value={newOrgForm[field] || ""}
                      onChange={(e) =>
                        setNewOrgForm((p) => ({
                          ...p,
                          [field]: e.target.value,
                        }))
                      }
                      placeholder={placeholder}
                      className="w-full p-2 border rounded-lg text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">
                    Plan asignado
                  </label>
                  <select
                    value={newOrgForm.plan}
                    onChange={(e) =>
                      setNewOrgForm((p) => ({ ...p, plan: e.target.value }))
                    }
                    className="w-full p-2 border rounded-lg text-sm"
                  >
                    {Object.entries(PLAN_CONFIG).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v.label} â {v.priceLabel}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={crearOrganizacion}
                  className="w-full bg-purple-600 text-white py-3 rounded-xl font-black text-sm hover:bg-purple-700 mt-2"
                >
                  â Crear organizaciÃ³n
                </button>
              </div>
            </div>
          )}

          {/* TAB: IPS / Empresas â crear credenciales de acceso para empresas */}
          {superAdminTab === "ips" && (
            <div className="space-y-4">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
                <p className="font-black text-teal-800 text-sm">
                  ð¥ GestiÃ³n de IPS / Empresas
                </p>
                <p className="text-xs text-teal-600 mt-1">
                  Cree credenciales de acceso para que las empresas (IPS)
                  ingresen al sistema desde el login principal. El admin de cada
                  empresa podrÃ¡ crear mÃ©dicos y secretarias vinculados a ella.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map((emp) => {
                  const adminUser = usersList.find(
                    (u) => u.empresaId === emp.id && u.role === "admin_empresa"
                  );
                  const medicosEmp = usersList.filter(
                    (u) => u.empresaId === emp.id && u.role === "medico"
                  );
                  const secresEmp = usersList.filter(
                    (u) => u.empresaId === emp.id && u.role === "secretaria"
                  );
                  const isEditing = ipsEditingEmpId === emp.id;
                  return (
                    <div
                      key={emp.id}
                      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                    >
                      <div className="mb-3">
                        <h4 className="font-black text-gray-800 text-sm">
                          {emp.nombre}
                        </h4>
                        <p className="text-xs text-gray-400">
                          NIT: {emp.nit} Â· {emp.ciudad || ""}
                        </p>
                      </div>
                      {/* Estado actual */}
                      {adminUser ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 mb-3">
                          <p className="text-xs font-bold text-emerald-700">
                            â Admin IPS: @{adminUser.user}
                          </p>
                          <p className="text-[10px] text-emerald-500">
                            {adminUser.name}
                          </p>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
                              ð¨ââï¸ {medicosEmp.length} mÃ©dico
                              {medicosEmp.length !== 1 ? "s" : ""}
                            </span>
                            <span className="text-[10px] bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded font-bold">
                              ðï¸ {secresEmp.length} secretaria
                              {secresEmp.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 mb-3">
                          <p className="text-xs text-amber-600 font-bold">
                            â ï¸ Sin credenciales IPS
                          </p>
                        </div>
                      )}
                      {/* Form para crear/editar credenciales */}
                      {isEditing ? (
                        <div className="space-y-2 border-t border-gray-100 pt-3">
                          <input
                            value={ipsCredForm.nombre}
                            onChange={(e) =>
                              setIpsCredForm((p) => ({
                                ...p,
                                nombre: e.target.value,
                              }))
                            }
                            className="w-full p-2 border rounded-lg text-xs"
                            placeholder="Nombre del administrador"
                          />
                          <input
                            value={ipsCredForm.user}
                            onChange={(e) =>
                              setIpsCredForm((p) => ({
                                ...p,
                                user: e.target.value
                                  .toLowerCase()
                                  .replace(/\s/g, "_"),
                              }))
                            }
                            className="w-full p-2 border rounded-lg text-xs font-mono"
                            placeholder="usuario_admin"
                          />
                          <input
                            type="password"
                            value={ipsCredForm.pass}
                            onChange={(e) =>
                              setIpsCredForm((p) => ({
                                ...p,
                                pass: e.target.value,
                              }))
                            }
                            className="w-full p-2 border rounded-lg text-xs"
                            placeholder="ContraseÃ±a (mÃ­n. 8 caracteres)"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={async () => {
                                if (
                                  !ipsCredForm.nombre.trim() ||
                                  !ipsCredForm.user.trim() ||
                                  !ipsCredForm.pass.trim()
                                ) {
                                  showAlert(
                                    "â ï¸ Complete nombre, usuario y contraseÃ±a."
                                  );
                                  return;
                                }
                                if (ipsCredForm.pass.length < 8) {
                                  showAlert(
                                    "â ï¸ La contraseÃ±a debe tener mÃ­nimo 8 caracteres."
                                  );
                                  return;
                                }
                                if (
                                  usersList.find(
                                    (u) => u.user === ipsCredForm.user.trim()
                                  )
                                ) {
                                  showAlert(
                                    "â ï¸ Ese nombre de usuario ya existe en el sistema."
                                  );
                                  return;
                                }
                                const { hash: pwH, salt: pwS } =
                                  await _pbkdf2Hash(ipsCredForm.pass);
                                const nuevoAdminEmp = {
                                  id: Date.now(),
                                  user: ipsCredForm.user.trim(),
                                  name: ipsCredForm.nombre.trim(),
                                  passHash: pwH,
                                  passSalt: pwS,
                                  mustChangePassword: true,
                                  role: "admin_empresa",
                                  orgId: emp.orgId || ORG_DEFAULT_ID,
                                  empresaId: emp.id,
                                  license: "clinica",
                                  licenseExpiry: "2099-12-31",
                                  licenseStarted: new Date()
                                    .toISOString()
                                    .split("T")[0],
                                  porcentajeHonorarios: 0,
                                  activo: true,
                                  secretariaPermisos: {
                                    ...SECRETARIA_PERMISOS_DEFAULT,
                                  },
                                  doctorData: { ...DEFAULT_DOCTOR_DATA },
                                };
                                const updU = [...usersList, nuevoAdminEmp];
                                setUsersList(updU);
                                _sync("siso_users", JSON.stringify(updU));
                                // Actualizar empresa con referencia al admin
                                const updC = companies.map((c) =>
                                  c.id === emp.id
                                    ? {
                                        ...c,
                                        adminEmpresaUser:
                                          ipsCredForm.user.trim(),
                                      }
                                    : c
                                );
                                setCompanies(updC);
                                _syncCompanies(updC);
                                setIpsEditingEmpId(null);
                                setIpsCredForm({
                                  nombre: "",
                                  user: "",
                                  pass: "",
                                  empresaId: null,
                                });
                                showAlert(
                                  `â Credenciales IPS creadas para "${emp.nombre}".\n\n` +
                                    `Usuario: ${ipsCredForm.user.trim()}\n` +
                                    `ContraseÃ±a: ${ipsCredForm.pass}\n\n` +
                                    `â ï¸ Anote la contraseÃ±a â se pedirÃ¡ cambiarla en el primer login.`
                                );
                              }}
                              className="flex-1 py-2 bg-teal-600 text-white text-xs font-black rounded-lg hover:bg-teal-700"
                            >
                              â Crear Admin IPS
                            </button>
                            <button
                              onClick={() => {
                                setIpsEditingEmpId(null);
                                setIpsCredForm({
                                  nombre: "",
                                  user: "",
                                  pass: "",
                                  empresaId: null,
                                });
                              }}
                              className="px-3 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setIpsEditingEmpId(emp.id);
                            setIpsCredForm({
                              nombre: "",
                              user: "",
                              pass: "",
                              empresaId: emp.id,
                            });
                          }}
                          className={`w-full py-2 text-xs font-black rounded-lg ${
                            adminUser
                              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              : "bg-teal-600 text-white hover:bg-teal-700"
                          }`}
                        >
                          {adminUser
                            ? "ð Crear nuevo admin"
                            : "ð¥ Crear Credenciales IPS"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: Todos los usuarios */}
          {superAdminTab === "usuarios" && (
            <div className="overflow-x-auto rounded-2xl border border-purple-100 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-purple-50">
                  <tr>
                    {[
                      "Usuario",
                      "Nombre",
                      "Rol",
                      "OrganizaciÃ³n",
                      "Plan",
                      "Activo",
                    ].map((h) => (
                      <th
                        key={h}
                        className="p-3 text-left text-xs font-black text-purple-700"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((u) => {
                    const uOrg = orgsList.find(
                      (o) => o.orgId === (u.orgId || ORG_DEFAULT_ID)
                    );
                    return (
                      <tr
                        key={u.id || u.user}
                        className="border-t border-purple-50 hover:bg-purple-50/30"
                      >
                        <td className="p-3 font-mono text-xs">@{u.user}</td>
                        <td className="p-3 text-xs font-bold">{u.name}</td>
                        <td className="p-3">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              u.role === "super_admin"
                                ? "bg-purple-100 text-purple-800"
                                : u.role === "admin_empresa"
                                ? "bg-teal-100 text-teal-800"
                                : u.role === "administrador"
                                ? "bg-red-100 text-red-700"
                                : u.role === "secretaria"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {u.role === "super_admin"
                              ? "â­ Super Admin"
                              : u.role === "admin_empresa"
                              ? "ð¥ Admin IPS"
                              : u.role === "administrador"
                              ? "Admin"
                              : u.role === "secretaria"
                              ? "Secretaria"
                              : "MÃ©dico"}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-gray-600">
                          {uOrg?.orgName || u.orgId || ORG_DEFAULT_ID}
                        </td>
                        <td className="p-3 text-xs text-gray-600">
                          {PLAN_CONFIG[u.license]?.label || u.license || "â"}
                        </td>
                        <td className="p-3">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              u.activo === false
                                ? "bg-red-100 text-red-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {u.activo === false ? "Inactivo" : "Activo"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );

};

export default SuperAdmin;
