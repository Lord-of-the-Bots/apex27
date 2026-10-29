// State belongs to this dashboard engine; SimHub root belongs to each binding.
var A27_STATE = {};
var A27_CATALOGS={"ru":["  Давление: ","  ИНЦИДЕНТЫ"," · резерв "," км"," км/ч"," кр.","% КРУГА","% СУ","/кр.","APEX 27 / ОЖИДАНИЕ СЕССИИ","APEX 27 FULL / ОЖИДАНИЕ СЕССИИ","DRIVE THROUGH","FL","FR","GRAN TURISMO / ЗАЕЗД","GT: температура поверхности шин","INVALID","PIT","RACE ENGINEER","RL","RR","SAFETY CAR","STOP & GO","iRacing: live-износ шин недоступен","±L — разница полных кругов","Δ К ЛИЧНОМУ РЕКОРДУ","Δ К ЛУЧШЕМУ КРУГУ СЕССИИ","Δ ПРЕДЫДУЩЕГО К ЛУЧШЕМУ","БАК ПУСТ","БАЛАНС ТОРМОЗОВ","БЕЛЫЙ","БЕЛЫЙ ФЛАГ","БЛИЖАЙШИЙ ТРАФИК","В БАКЕ","ВИРТУАЛЬНАЯ ЭНЕРГИЯ","ВРЕМЯ / ДИСТАНЦИЯ / КОНТРОЛЬ","ВРЕМЯ СПЕЦУЧАСТКА","ВЫ","ВЫ  /  ","Виртуальная энергия учитывается отдельно","ГАЗ","ГОНКА","ДАВЛЕНИЕ ШИН","ДЕФИЦИТ","ДИСКВАЛИФИКАЦИЯ","ДЛИНА СУ","ДО ФИНИША","ДОЗАПРАВИТЬ","Давление: ","Данные не из текущего заезда","Данные текущего заезда","Данные шин не передаются","Дефицит до расчётного финиша","Дисквалификация игрока","Дистанция по телеметрии симулятора","До финиша: ","ЖЁЛТЫЙ","ЖЁЛТЫЙ ФЛАГ","Ждём телеметрию топлива","ЗАДНЯЯ ЛЕВАЯ","ЗАДНЯЯ ПРАВАЯ","ЗАЕЗД","ЗАПАС В КРУГАХ","ЗЕЛЁНЫЙ","ЗЕЛЁНЫЙ ФЛАГ","Запас на следующий круг мал","Зелёный сигнал игры","ИНДИКАТОР ИГРЫ","Игра не отдаёт остаток топлива","Игра не передаёт подтверждённые флаги","Изменение сцепления на трассе","История с момента открытия дашборда","КАРТА / ПРОГРЕСС КРУГА","КАРТА / ПРОГРЕСС СУ","КВАЛИФИКАЦИЯ","КЛАСС","КЛЕТЧАТЫЙ ФЛАГ","КОНТРОЛЬ","КОНТРОЛЬ СКОРОСТИ","КРАСНЫЙ","КРАСНЫЙ ФЛАГ","КРУГ","КРУГ ","КРУГ АННУЛИРОВАН","КРУГА","Карта заполняется при проезде трассы","Круг аннулирован симулятором","ЛИМИТ","ЛИМИТ НЕ ПОДТВЕРЖДЁН","ЛИМИТЕР ВКЛЮЧЁН","ЛИМИТЕР ВЫКЛЮЧЕН","ЛИЧНЫЙ РЕКОРД","ЛУЧШИЙ","ЛУЧШИЙ В СЕССИИ","МАЛО ДО ЛИНИИ","МАШИНА / УСЛОВИЯ","МЕДЛЕННАЯ МАШИНА","МЕДЛЕННО","МЕНЮ ИГРЫ","НА ВРЕМЯ","НА ТРАССЕ","НЕТ АКТИВНОГО ФЛАГА","НЕТ ДАННЫХ","НУЖНА ДОЗАПРАВКА","Нет машины","Нет полученного сигнала • не гарантия чистой трассы","Нужен полный круг без дозаправки","ОБОРОТЫ","ОБСЛУЖИВАНИЕ","ОБУЧЕНИЕ РАСХОДА","ОБЯЗАТЕЛЬНЫЙ ПИТ","ОЖИДАНИЕ","ОСТАЛОСЬ В СЕССИИ","ОСТАЛОСЬ КРУГОВ","Общий зачёт","Остаток топлива без прогноза","Осторожно на трассе","Оценка + 1 круг","ПАУЗА","ПАУЗА / ПОВТОР","ПЕДАЛИ / КОНТРОЛЬ","ПЕЛОТОН / ВЕСЬ КРУГ","ПЕРЕДАЧА","ПЕРЕДНЯЯ ЛЕВАЯ","ПЕРЕДНЯЯ ПРАВАЯ","ПЕРЕКЛЮЧАЙТЕ","ПИТ / ЭНЕРГИЯ","ПИТ ВЫПОЛНЕН","ПИТ НА ЭТОМ КРУГЕ","ПИТ-ЛЕЙН","ПИТ-ЛИМИТЕР","ПИТ-ОКНО ЗАКРЫТО","ПИТ-ОКНО ОТКРЫТО","ПОВТОР","ПОЗИЦИИ ОБЩИЕ / C — В КЛАССЕ","ПОЗИЦИЯ","ПОЗИЦИЯ / КЛАСС","ПОРОГ SIMHUB","ПОСЛЕДНИЕ КРУГИ   /   Δ К ЛУЧШЕМУ","ПОСЛЕДНИЙ КРУГ","ПРАКТИКА","ПРЕВЫШЕН ЛИМИТ ПИТОВ","ПРЕВЫШЕНИЕ СКОРОСТИ","ПРЕДЫДУЩИЙ","ПРОГНОЗ КРУГА","ПРОГНОЗ: ХВАТАЕТ","ПРОГРЕСС СПЕЦУЧАСТКА","ПРОГРЕСС СУ","ПРОЙДЕНО ПО ТРАССЕ","Плавность газа и торможения","Планируйте остановку по запасу","Прогноз по среднему расходу","Процент от ёмкости энергии","РАЗБРОС ТЕМПЕРАТУР   ","РАЗБРОС ШИН","РАЗМИНКА","РАЗРЫВ, С","РАСХОД НА КРУГЕ","РАСХОД ОТКЛЮЧЁН","РЕЗЕРВ В РАСЧЁТЕ","РЕЗУЛЬТАТ СПЕЦУЧАСТКА","РЕМОНТ","РЕМОНТ / ПИТ","Расчёт по кругам не применяется","Расчёт только по топливу","Резерв уже учтён в расчёте","Резерв: 15% круга · ","СБРОСЬТЕ ТЕМП","СВЕРХ РЕЗЕРВА","СИГНАЛ ПЕРЕКЛЮЧЕНИЯ","СИНИЙ","СИНИЙ ФЛАГ","СКОЛЬЗКАЯ ТРАССА","СКОЛЬЗКО","СКОРОСТЬ","СОСТОЯНИЕ","СПЕЦУЧАСТОК","СРЕДНИЙ РАСХОД","СТИНТ","СЦЕПЛЕНИЕ","Сессия остановлена","Сигнал белого флага","Сигнал синего флага","Сигнал чёрного флага","Следите за лимитом пит-лейна","Следующий полный круг под риском","Снизьте расход • запас на исходе","Сравнение завершённого круга в сессии","ТЕКУЩИЙ","ТЕКУЩИЙ КРУГ","ТЕЛЕМЕТРИЯ ЗАЕЗДА","ТЕМП / РАБОТА НАД КРУГОМ","ТЕМП СЕССИИ","ТЕМПЕРАТУРА ШИН","ТЕМПЕРАТУРА ШИН / ","ТОЛЬКО ЗНАЧЕНИЕ RPM","ТОПЛИВА ДОСТАТОЧНО","ТОПЛИВО","ТОПЛИВО В БАКЕ","ТОПЛИВО НЕ ПЕРЕДАЁТСЯ","ТОРМОЗ","ТРАССА / ВОЗДУХ","ТРАФИК / СТРАТЕГИЯ","Температура: ","Температуры шин — в правом блоке","Топливный прогноз неприменим","Топливный прогноз — в центре","Топливо закончилось","Требуется обслуживание","ФИНИШ","ФЛАГИ","ФЛАГИ НЕ ПЕРЕДАЮТСЯ","ФЛАГИ НЕДОСТУПНЫ","Финишный сигнал","ХВАТИТ ПРИМЕРНО НА","ЦИФРЫ — ПОЗИЦИИ   /   СИНИЙ — ВЫ   /   ЯНТАРНЫЙ — PIT","ЧЁРНЫЙ","ЧЁРНЫЙ ФЛАГ","ШИНЫ / ТЕЛЕМЕТРИЯ СИМУЛЯТОРА","ШКАЛА RPM","ШТРАФ / ПИТ","ШТРАФЫ: ","ЭКОНОМЬТЕ ТОПЛИВО","ЭЛЕКТРОМОБИЛЬ","Электромобиль / контроль педалей","кг","км/ч","− быстрее     + медленнее","− впереди на трассе     + позади на трассе"],"en":["  Pressure: ","  INCIDENTS"," · reserve "," km"," km/h"," laps","% LAP","% STAGE","/lap","APEX 27 / WAITING FOR SESSION","APEX 27 FULL / WAITING FOR SESSION","DRIVE THROUGH","FL","FR","GRAN TURISMO / DRIVING","GT: tyre surface temperatures","INVALID","PIT","RACE ENGINEER","RL","RR","SAFETY CAR","STOP & GO","iRacing: live tyre wear unavailable","±L — complete laps ahead / behind","DELTA TO PERSONAL BEST","DELTA TO SESSION BEST","LAST LAP VS SESSION BEST","FUEL EMPTY","BRAKE BIAS","WHITE","WHITE FLAG","NEARBY TRAFFIC","IN TANK","VIRTUAL ENERGY","TIME / DISTANCE / INPUTS","STAGE TIME","YOU","YOU  /  ","Virtual energy is separate from fuel","THROTTLE","RACE","TYRE PRESSURES","SHORTFALL","DISQUALIFIED","STAGE LENGTH","TO FINISH","FUEL TO ADD","Pressure: ","Not live driving data","Current driving data","Tyre data unavailable","Fuel short of estimated finish","Player disqualified","Distance reported by the simulator","To finish: ","YELLOW","YELLOW FLAG","Waiting for fuel telemetry","REAR LEFT","REAR RIGHT","DRIVING","ESTIMATED LAPS","GREEN","GREEN FLAG","Little reserve for the next lap","Green signal from the simulator","GAME SHIFT LIGHTS","Fuel level not supplied by this game","No verified flag telemetry","Reduced grip on track","History recorded since opening the dash","MAP / LAP PROGRESS","MAP / STAGE PROGRESS","QUALIFYING","CLASS","CHEQUERED FLAG","MONITOR","SPEED CHECK","RED","RED FLAG","LAP","LAP ","LAP INVALID","LAPS","Map builds as you drive the track","Lap invalidated by the simulator","LIMIT","LIMIT UNCONFIRMED","LIMITER ON","LIMITER OFF","PERSONAL BEST","BEST","SESSION BEST","LOW FUEL TO LINE","CAR / CONDITIONS","SLOW CAR","SLOW CAR","GAME MENU","TIME ATTACK","ON TRACK","NO ACTIVE FLAG","NO DATA","REFUELLING NEEDED","No car","No active flag reported","Complete a lap without refuelling","RPM","IN SERVICE","LEARNING FUEL USE","MANDATORY PIT STOP","WAITING","SESSION REMAINING","LAPS REMAINING","Overall positions","Fuel level only, no range estimate","Caution on track","Estimate + 1 lap","PAUSED","PAUSE / REPLAY","PEDAL INPUTS","FULL FIELD / FULL LAP","GEAR","FRONT LEFT","FRONT RIGHT","SHIFT","PIT / ENERGY","PIT STOP COMPLETE","PIT THIS LAP","PIT LANE","PIT LIMITER","PIT WINDOW CLOSED","PIT WINDOW OPEN","REPLAY","OVERALL POSITIONS / C = CLASS","POSITION","POSITION / CLASS","SIMHUB THRESHOLD","RECENT LAPS   /   DELTA TO BEST","FINAL LAP","PRACTICE","PIT SPEED EXCEEDED","OVER SPEED LIMIT","LAST","PREDICTED LAP","ESTIMATE: ENOUGH","STAGE PROGRESS","STAGE PROGRESS","TRACK PROGRESS","Smooth throttle and braking","Plan a stop for fuel","Estimate from average fuel use","Percentage of energy capacity","TYRE TEMP SPREAD   ","TYRE TEMP SPREAD","WARMUP","GAP, S","LAP FUEL USE","FUEL USE DISABLED","RESERVE INCLUDED","STAGE RESULT","REPAIR","REPAIR / PIT","Lap range does not apply","Physical fuel estimate only","Reserve already included","Reserve: 15% of a lap · ","SLOW DOWN","ABOVE RESERVE","SHIFT SIGNAL","BLUE","BLUE FLAG","SLIPPERY TRACK","LOW GRIP","SPEED","STATUS","STAGE","AVERAGE FUEL USE","STINT","CLUTCH","Session stopped","White flag reported","Blue flag reported","Black flag reported","Watch the pit speed limit","Not enough reserve for another lap","Save fuel • reserve running low","Completed lap compared with session best","CURRENT","CURRENT LAP","DRIVING DATA","PACE / LAP ANALYSIS","SESSION PACE","TYRE TEMPERATURES","TYRE TEMPERATURES / ","RPM ONLY","FUEL SUFFICIENT","FUEL","FUEL IN TANK","FUEL UNAVAILABLE","BRAKE","TRACK / AIR","TRAFFIC / STRATEGY","Temperature: ","Tyre temperatures shown on the right","Fuel prediction does not apply","Fuel estimate in the centre panel","No fuel remaining","Service required","FINISH","FLAGS","FLAGS NOT SUPPORTED","FLAGS UNAVAILABLE","Finish signal reported","ESTIMATED RANGE","NUMBERS = POSITIONS   /   BLUE = YOU   /   AMBER = PIT","BLACK","BLACK FLAG","TYRE TELEMETRY","RPM SCALE","PENALTY / PIT","PENALTIES: ","SAVE FUEL","ELECTRIC CAR","Electric car / pedal inputs","kg","km/h","− faster     + slower","− ahead on track     + behind on track"],"de":["  Druck: ","  VORFÄLLE"," · Reserve "," km"," km/h"," Rd.","% RUNDE","% WP","/Rd.","APEX 27 / WARTE AUF SESSION","APEX 27 FULL / WARTE AUF SESSION","DRIVE THROUGH","FL","FR","GRAN TURISMO / FAHRT","GT: Reifenoberflächentemperatur","UNGÜLTIG","PIT","RENNINGENIEUR","RL","RR","SAFETY CAR","STOP & GO","iRacing: kein Live-Reifenverschleiß","±L — Abstand in ganzen Runden","Δ ZUR PERSÖNLICHEN BESTZEIT","Δ ZUR SESSIONBESTZEIT","Δ LETZTE ZUR BESTEN RUNDE","TANK LEER","BREMSBALANCE","WEISS","WEISSE FLAGGE","VERKEHR IN DER NÄHE","IM TANK","VIRTUELLE ENERGIE","ZEIT / DISTANZ / KONTROLLE","WP-ZEIT","DU","DU  /  ","Virtuelle Energie wird separat berücksichtigt","GAS","RENNEN","REIFENDRUCK","FEHLMENGE","DISQUALIFIZIERT","WP-LÄNGE","BIS ZUM ZIEL","NACHTANKEN","Druck: ","Daten nicht aus aktueller Fahrt","Daten der aktuellen Fahrt","Keine Reifendaten übertragen","Fehlmenge bis zum geschätzten Ziel","Fahrer disqualifiziert","Distanz laut Sim-Telemetrie","Bis zum Ziel: ","GELB","GELBE FLAGGE","Warte auf Kraftstoffdaten","HINTEN LINKS","HINTEN RECHTS","FAHRT","REICHWEITE IN RUNDEN","GRÜN","GRÜNE FLAGGE","Wenig Reserve für die nächste Runde","Grünes Signal des Spiels","SPIELANZEIGE","Spiel meldet keinen Kraftstoffstand","Spiel meldet keine bestätigten Flaggen","Veränderte Streckenhaftung","Verlauf seit Öffnen des Dashboards","KARTE / RUNDENFORTSCHRITT","KARTE / WP-FORTSCHRITT","QUALIFYING","KLASSE","ZIELFLAGGE","KONTROLLE","TEMPOKONTROLLE","ROT","ROTE FLAGGE","RUNDE","RUNDE ","RUNDE UNGÜLTIG","RUNDEN","Karte entsteht beim Fahren","Runde vom Simulator gestrichen","LIMIT","LIMIT UNBESTÄTIGT","LIMITER AN","LIMITER AUS","PERSÖNLICHE BESTZEIT","BESTZEIT","SESSIONBESTZEIT","KNAPP BIS ZUR LINIE","AUTO / BEDINGUNGEN","LANGSAMES AUTO","LANGSAMES AUTO","SPIELMENÜ","ZEITFAHREN","AUF DER STRECKE","KEINE AKTIVE FLAGGE","KEINE DATEN","NACHTANKEN NÖTIG","Kein Fahrzeug","Kein Signal • Strecke nicht sicher frei","Eine volle Runde ohne Nachtanken nötig","DREHZAHL","SERVICE","VERBRAUCH ERMITTELN","PFLICHTBOXENSTOPP","WARTEN","SESSION-RESTZEIT","RUNDEN ÜBRIG","Gesamtwertung","Kraftstoffstand ohne Prognose","Vorsicht auf der Strecke","Schätzung + 1 Runde","PAUSE","PAUSE / REPLAY","PEDALE / KONTROLLE","FELD / GESAMTE RUNDE","GANG","VORNE LINKS","VORNE RECHTS","HOCHSCHALTEN","BOXEN / ENERGIE","BOXENSTOPP ERLEDIGT","DIESE RUNDE BOXEN","BOXENGASSE","BOXENLIMITER","BOXENFENSTER ZU","BOXENFENSTER OFFEN","REPLAY","GESAMTPOSITION / C — KLASSE","POSITION","POSITION / KLASSE","SIMHUB-SCHWELLE","LETZTE RUNDEN   /   Δ ZUR BESTZEIT","LETZTE RUNDE","TRAINING","BOXENLIMIT ÜBERSCHRITTEN","ZU SCHNELL","VORHERIGER","RUNDENPROGNOSE","PROGNOSE: REICHT","WP-FORTSCHRITT","WP-FORTSCHRITT","STRECKE ABSOLVIERT","Gas und Bremse dosieren","Boxenstopp nach Reichweite planen","Prognose nach Durchschnittsverbrauch","Prozent der Energiekapazität","TEMPERATURSPREIZUNG   ","REIFENSPREIZUNG","WARM-UP","ABSTAND, S","VERBRAUCH PRO RUNDE","VERBRAUCH DEAKTIVIERT","RESERVE EINGERECHNET","WP-ERGEBNIS","REPARATUR","REPARATUR / BOXEN","Keine Rundenberechnung","Berechnung nur nach Kraftstoff","Reserve bereits eingerechnet","Reserve: 15% einer Runde · ","TEMPO REDUZIEREN","ÜBER DER RESERVE","SCHALTSIGNAL","BLAU","BLAUE FLAGGE","RUTSCHIGE STRECKE","RUTSCHIG","GESCHWINDIGKEIT","STATUS","WERTUNGSPRÜFUNG","Ø VERBRAUCH","STINT","KUPPLUNG","Session angehalten","Signal der weißen Flagge","Signal der blauen Flagge","Signal der schwarzen Flagge","Boxengassenlimit beachten","Nächste volle Runde gefährdet","Verbrauch senken • Reserve knapp","Vergleich der beendeten Sessionrunde","AKTUELL","AKTUELLE RUNDE","FAHRTTELEMETRIE","PACE / RUNDENANALYSE","SESSIONTEMPO","REIFENTEMPERATUR","REIFENTEMPERATUR / ","NUR RPM-WERT","KRAFTSTOFF REICHT","KRAFTSTOFF","KRAFTSTOFF IM TANK","KEINE KRAFTSTOFFDATEN","BREMSE","STRECKE / LUFT","VERKEHR / STRATEGIE","Temperatur: ","Reifentemperaturen im rechten Feld","Kraftstoffprognose nicht anwendbar","Kraftstoffprognose in der Mitte","Kraftstoff aufgebraucht","Service erforderlich","ZIEL","FLAGGEN","KEINE FLAGGENDATEN","FLAGGEN NICHT VERFÜGBAR","Zielsignal","REICHT ETWA FÜR","ZAHLEN — POSITIONEN   /   BLAU — DU   /   ORANGE — PIT","SCHWARZ","SCHWARZE FLAGGE","REIFEN / SIM-TELEMETRIE","RPM-SKALA","STRAFE / BOXEN","STRAFEN: ","KRAFTSTOFF SPAREN","ELEKTROAUTO","Elektroauto / Pedalkontrolle","kg","km/h","− schneller     + langsamer","− auf der Strecke voraus     + dahinter"],"es":["  Presión: ","  INCIDENTES"," · reserva "," km"," km/h"," vueltas","% VUELTA","% TRAMO","/vuelta","APEX 27 / ESPERANDO SESIÓN","APEX 27 FULL / ESPERANDO SESIÓN","DRIVE THROUGH","FL","FR","GRAN TURISMO / SESIÓN","GT: temperatura superficial de neumáticos","INVÁLIDA","PIT","INGENIERO DE PISTA","RL","RR","SAFETY CAR","STOP & GO","iRacing: desgaste de neumáticos no disponible en vivo","±L — diferencia en vueltas completas","Δ AL RÉCORD PERSONAL","Δ A LA MEJOR VUELTA DE LA SESIÓN","Δ VUELTA ANTERIOR A LA MEJOR","DEPÓSITO VACÍO","REPARTO DE FRENADA","BLANCA","BANDERA BLANCA","TRÁFICO CERCANO","EN EL DEPÓSITO","ENERGÍA VIRTUAL","TIEMPO / DISTANCIA / CONTROL","TIEMPO DEL TRAMO","TÚ","TÚ  /  ","La energía virtual se calcula aparte","ACELERADOR","CARRERA","PRESIÓN DE NEUMÁTICOS","DÉFICIT","DESCALIFICACIÓN","LONGITUD DEL TRAMO","HASTA LA META","A REPOSTAR","Presión: ","Datos ajenos a la sesión actual","Datos de la sesión actual","No se transmiten datos de neumáticos","Déficit hasta la meta estimada","Piloto descalificado","Distancia según la telemetría del simulador","Hasta la meta: ","AMARILLA","BANDERA AMARILLA","Esperando telemetría de combustible","TRASERA IZQUIERDA","TRASERA DERECHA","SESIÓN","AUTONOMÍA EN VUELTAS","VERDE","BANDERA VERDE","Poca reserva para la siguiente vuelta","Señal verde del juego","INDICADOR DEL JUEGO","El juego no indica el combustible restante","El juego no transmite banderas confirmadas","Cambio de agarre en pista","Historial desde la apertura del panel","MAPA / PROGRESO DE VUELTA","MAPA / PROGRESO DEL TRAMO","CLASIFICACIÓN","CLASE","BANDERA A CUADROS","CONTROL","CONTROL DE VELOCIDAD","ROJA","BANDERA ROJA","VUELTA","VUELTA ","VUELTA INVALIDADA","VUELTAS","El mapa se traza al recorrer la pista","Vuelta invalidada por el simulador","LÍMITE","LÍMITE NO CONFIRMADO","LIMITADOR ACTIVADO","LIMITADOR DESACTIVADO","RÉCORD PERSONAL","MEJOR","MEJOR DE LA SESIÓN","POCO HASTA LA LÍNEA","COCHE / CONDICIONES","COCHE LENTO","COCHE LENTO","MENÚ DEL JUEGO","CONTRARRELOJ","EN PISTA","SIN BANDERA ACTIVA","SIN DATOS","HAY QUE REPOSTAR","Sin coche","Sin señal • no garantiza pista libre","Hace falta una vuelta completa sin repostar","REVOLUCIONES","SERVICIO","CALCULANDO CONSUMO","PARADA OBLIGATORIA","EN ESPERA","TIEMPO RESTANTE","VUELTAS RESTANTES","Clasificación general","Combustible restante sin previsión","Precaución en pista","Estimación + 1 vuelta","PAUSA","PAUSA / REPETICIÓN","PEDALES / CONTROL","PELOTÓN / VUELTA COMPLETA","MARCHA","DELANTERA IZQUIERDA","DELANTERA DERECHA","SUBE MARCHA","BOXES / ENERGÍA","PARADA HECHA","ENTRA ESTA VUELTA","CALLE DE BOXES","LIMITADOR DE BOXES","VENTANA DE BOXES CERRADA","VENTANA DE BOXES ABIERTA","REPETICIÓN","POSICIÓN GENERAL / C — CLASE","POSICIÓN","POSICIÓN / CLASE","UMBRAL SIMHUB","ÚLTIMAS VUELTAS   /   Δ A LA MEJOR","ÚLTIMA VUELTA","ENTRENAMIENTOS","LÍMITE DE BOXES SUPERADO","EXCESO DE VELOCIDAD","ANTERIOR","VUELTA ESTIMADA","PREVISIÓN: SUFICIENTE","PROGRESO DEL TRAMO","PROGRESO DEL TRAMO","DISTANCIA RECORRIDA","Suavidad de acelerador y freno","Planifica la parada según la autonomía","Previsión según consumo medio","Porcentaje de capacidad energética","DIFERENCIA DE TEMPERATURA   ","DIF. ENTRE NEUMÁTICOS","CALENTAMIENTO","DIFERENCIA, S","CONSUMO POR VUELTA","CONSUMO DESACTIVADO","RESERVA INCLUIDA","RESULTADO DEL TRAMO","REPARACIÓN","REPARACIÓN / BOXES","No se aplica cálculo por vueltas","Cálculo basado solo en combustible","La reserva ya está incluida","Reserva: 15% de una vuelta · ","REDUCE EL RITMO","SOBRE LA RESERVA","SEÑAL DE CAMBIO","AZUL","BANDERA AZUL","PISTA RESBALADIZA","POCO AGARRE","VELOCIDAD","ESTADO","TRAMO","CONSUMO MEDIO","TANDA","EMBRAGUE","Sesión detenida","Señal de bandera blanca","Señal de bandera azul","Señal de bandera negra","Respeta el límite de boxes","Siguiente vuelta completa en riesgo","Reduce el consumo • queda poca reserva","Comparación de la vuelta completada en la sesión","ACTUAL","VUELTA ACTUAL","TELEMETRÍA DE SESIÓN","RITMO / TRABAJO DE VUELTA","RITMO DE SESIÓN","TEMPERATURA DE NEUMÁTICOS","TEMPERATURA DE NEUMÁTICOS / ","SOLO VALOR RPM","COMBUSTIBLE SUFICIENTE","COMBUSTIBLE","COMBUSTIBLE EN DEPÓSITO","COMBUSTIBLE NO TRANSMITIDO","FRENO","PISTA / AIRE","TRÁFICO / ESTRATEGIA","Temperatura: ","Temperaturas de neumáticos a la derecha","Previsión de combustible no aplicable","Previsión de combustible en el centro","Combustible agotado","Servicio necesario","META","BANDERAS","BANDERAS NO TRANSMITIDAS","BANDERAS NO DISPONIBLES","Señal de meta","AUTONOMÍA ESTIMADA","NÚMEROS — POSICIONES   /   AZUL — TÚ   /   ÁMBAR — PIT","NEGRA","BANDERA NEGRA","NEUMÁTICOS / TELEMETRÍA DEL SIMULADOR","ESCALA RPM","PENALIZACIÓN / BOXES","PENALIZACIONES: ","AHORRA COMBUSTIBLE","COCHE ELÉCTRICO","Coche eléctrico / control de pedales","kg","km/h","− más rápido     + más lento","− delante en pista     + detrás en pista"],"fr":["  Pression : ","  INCIDENTS"," · réserve "," km"," km/h"," tours","% DU TOUR","% SPÉCIALE","/tour","APEX 27 / EN ATTENTE DE SESSION","APEX 27 FULL / EN ATTENTE DE SESSION","DRIVE THROUGH","FL","FR","GRAN TURISMO / ROULAGE","GT : température de surface des pneus","INVALIDE","PIT","INGÉNIEUR DE COURSE","RL","RR","SAFETY CAR","STOP & GO","iRacing : usure des pneus indisponible en direct","±L — écart en tours complets","Δ AU RECORD PERSONNEL","Δ AU MEILLEUR TOUR DE LA SESSION","Δ DERNIER TOUR AU MEILLEUR","RÉSERVOIR VIDE","RÉPART. FREINS","BLANC","DRAPEAU BLANC","TRAFIC PROCHE","DANS LE RÉSERVOIR","ÉNERGIE VIRTUELLE","TEMPS / DISTANCE / COMMANDES","TEMPS DE SPÉCIALE","VOUS","VOUS  /  ","Énergie virtuelle comptée séparément","ACCÉLÉRATEUR","COURSE","PRESSION DES PNEUS","DÉFICIT","DISQUALIFICATION","LONGUEUR SPÉCIALE","JUSQU’À L’ARRIVÉE","À RAVITAILLER","Pression : ","Données hors session actuelle","Données de la session actuelle","Données des pneus non transmises","Déficit jusqu’à l’arrivée estimée","Pilote disqualifié","Distance selon la télémétrie du simulateur","Jusqu’à l’arrivée : ","JAUNE","DRAPEAU JAUNE","En attente de données carburant","ARRIÈRE GAUCHE","ARRIÈRE DROITE","ROULAGE","AUTONOMIE EN TOURS","VERT","DRAPEAU VERT","Peu de réserve pour le prochain tour","Signal vert du jeu","INDICATEUR DU JEU","Le jeu ne transmet pas le carburant restant","Le jeu ne transmet pas de drapeaux confirmés","Adhérence de la piste modifiée","Historique depuis l’ouverture du tableau","CARTE / PROGRESSION DU TOUR","CARTE / PROGRESSION SPÉCIALE","QUALIFICATIONS","CLASSE","DRAPEAU À DAMIER","COMMANDES","CONTRÔLE VITESSE","ROUGE","DRAPEAU ROUGE","TOUR","TOUR ","TOUR INVALIDÉ","TOURS","La carte se dessine en roulant","Tour invalidé par le simulateur","LIMITE","LIMITE NON CONFIRMÉE","LIMITEUR ACTIVÉ","LIMITEUR DÉSACTIVÉ","RECORD PERSONNEL","MEILLEUR","MEILLEUR EN SESSION","CARBURANT CRITIQUE","VOITURE / CONDITIONS","VOITURE LENTE","VOITURE LENTE","MENU DU JEU","CONTRE-LA-MONTRE","EN PISTE","AUCUN DRAPEAU ACTIF","AUCUNE DONNÉE","RAVITAILLEMENT NÉCESSAIRE","Aucune voiture","Aucun signal • piste libre non garantie","Un tour complet sans ravitailler requis","RÉGIME","ENTRETIEN","MESURE CONSOMMATION","ARRÊT OBLIGATOIRE","EN ATTENTE","TEMPS RESTANT","TOURS RESTANTS","Classement général","Carburant restant sans prévision","Prudence en piste","Estimation + 1 tour","PAUSE","PAUSE / REPLAY","PÉDALES / COMMANDES","PELOTON / TOUR COMPLET","RAPPORT","AVANT GAUCHE","AVANT DROITE","MONTEZ UN RAPPORT","STANDS / ÉNERGIE","ARRÊT EFFECTUÉ","RENTREZ CE TOUR","VOIE DES STANDS","LIMITEUR STANDS","FENÊTRE STANDS FERMÉE","FENÊTRE STANDS OUVERTE","REPLAY","POSITIONS GÉNÉRALES / C — CLASSE","POSITION","POSITION / CLASSE","SEUIL SIMHUB","DERNIERS TOURS   /   Δ AU MEILLEUR","DERNIER TOUR","ESSAIS LIBRES","LIMITE STANDS DÉPASSÉE","EXCÈS DE VITESSE","PRÉCÉDENT","TOUR ESTIMÉ","PRÉVISION : SUFFISANT","PROGRESSION SPÉCIALE","PROGRESSION SPÉCIALE","DISTANCE PARCOURUE","Dosage accélérateur et frein","Prévoyez l’arrêt selon l’autonomie","Prévision selon la consommation moyenne","Pourcentage de capacité énergétique","ÉCART DE TEMPÉRATURE   ","ÉCART ENTRE PNEUS","ÉCHAUFFEMENT","ÉCART, S","CONSOMMATION PAR TOUR","CONSOMMATION DÉSACTIVÉE","RÉSERVE INCLUSE","RÉSULTAT SPÉCIALE","RÉPARATION","RÉPARATION / STANDS","Calcul par tour non applicable","Calcul basé uniquement sur le carburant","Réserve déjà incluse dans le calcul","Réserve : 15% d’un tour · ","RALENTISSEZ","AU-DELÀ DE LA RÉSERVE","SIGNAL DE CHANGEMENT","BLEU","DRAPEAU BLEU","PISTE GLISSANTE","GLISSANT","VITESSE","ÉTAT","SPÉCIALE","CONSOMMATION MOYENNE","RELAIS","EMBRAYAGE","Session interrompue","Signal du drapeau blanc","Signal du drapeau bleu","Signal du drapeau noir","Respectez la limite des stands","Prochain tour complet incertain","Réduisez la consommation • réserve faible","Comparaison du tour terminé dans la session","ACTUEL","TOUR ACTUEL","TÉLÉMÉTRIE SESSION","RYTHME / TRAVAIL DU TOUR","RYTHME DE LA SESSION","TEMPÉRATURE DES PNEUS","TEMPÉRATURE DES PNEUS / ","VALEUR RPM SEULE","CARBURANT SUFFISANT","CARBURANT","CARBURANT EN RÉSERVOIR","CARBURANT NON TRANSMIS","FREIN","PISTE / AIR","TRAFIC / STRATÉGIE","Température : ","Températures des pneus à droite","Prévision carburant non applicable","Prévision carburant au centre","Carburant épuisé","Entretien nécessaire","ARRIVÉE","DRAPEAUX","DRAPEAUX NON TRANSMIS","DRAPEAUX INDISPONIBLES","Signal d’arrivée","AUTONOMIE ESTIMÉE","CHIFFRES — POSITIONS   /   BLEU — VOUS   /   AMBRE — PIT","NOIR","DRAPEAU NOIR","PNEUS / TÉLÉMÉTRIE SIMULATEUR","ÉCHELLE RPM","PÉNALITÉ / STANDS","PÉNALITÉS : ","ÉCONOMISEZ DU CARBURANT","VOITURE ÉLECTRIQUE","Voiture électrique / contrôle des pédales","kg","km/h","− plus rapide     + plus lent","− devant en piste     + derrière en piste"],"it":["  Pressione: ","  INCIDENTI"," · riserva "," km"," km/h"," giri","% GIRO","% SPECIALE","/giro","APEX 27 / IN ATTESA DELLA SESSIONE","APEX 27 FULL / IN ATTESA DELLA SESSIONE","DRIVE THROUGH","FL","FR","GRAN TURISMO / SESSIONE","GT: temperatura superficiale pneumatici","NON VALIDO","PIT","INGEGNERE DI PISTA","RL","RR","SAFETY CAR","STOP & GO","iRacing: usura gomme in tempo reale non disponibile","±L — distacco in giri interi","Δ DAL RECORD PERSONALE","Δ DAL MIGLIOR GIRO DELLA SESSIONE","Δ ULTIMO GIRO DAL MIGLIORE","SERBATOIO VUOTO","RIPARTIZIONE FRENATA","BIANCA","BANDIERA BIANCA","TRAFFICO VICINO","NEL SERBATOIO","ENERGIA VIRTUALE","TEMPO / DISTANZA / CONTROLLI","TEMPO SPECIALE","TU","TU  /  ","Energia virtuale conteggiata separatamente","ACCELERATORE","GARA","PRESSIONE GOMME","CARENZA","SQUALIFICA","LUNGHEZZA SPECIALE","AL TRAGUARDO","DA RIFORNIRE","Pressione: ","Dati non della sessione attuale","Dati della sessione attuale","Dati pneumatici non trasmessi","Carenza fino al traguardo stimato","Pilota squalificato","Distanza dalla telemetria del simulatore","Al traguardo: ","GIALLA","BANDIERA GIALLA","In attesa della telemetria carburante","POSTERIORE SINISTRA","POSTERIORE DESTRA","SESSIONE","AUTONOMIA IN GIRI","VERDE","BANDIERA VERDE","Poca riserva per il prossimo giro","Segnale verde del gioco","INDICATORE DEL GIOCO","Il gioco non invia il carburante residuo","Il gioco non invia bandiere confermate","Aderenza della pista cambiata","Cronologia dall’apertura del cruscotto","MAPPA / AVANZAMENTO GIRO","MAPPA / AVANZAMENTO SPECIALE","QUALIFICA","CLASSE","BANDIERA A SCACCHI","CONTROLLI","CONTROLLO VELOCITÀ","ROSSA","BANDIERA ROSSA","GIRO","GIRO ","GIRO ANNULLATO","GIRI","La mappa si crea percorrendo la pista","Giro annullato dal simulatore","LIMITE","LIMITE NON CONFERMATO","LIMITATORE ATTIVO","LIMITATORE DISATTIVO","RECORD PERSONALE","MIGLIORE","MIGLIORE SESSIONE","LINEA A RISCHIO","AUTO / CONDIZIONI","AUTO LENTA","AUTO LENTA","MENU DEL GIOCO","PROVA A TEMPO","IN PISTA","NESSUNA BANDIERA ATTIVA","DATI ASSENTI","RIFORNIMENTO NECESSARIO","Nessuna auto","Nessun segnale • pista libera non garantita","Serve un giro completo senza rifornire","GIRI MOTORE","ASSISTENZA","CALCOLO CONSUMO","SOSTA OBBLIGATORIA","IN ATTESA","TEMPO RESIDUO","GIRI RIMASTI","Classifica generale","Carburante residuo senza previsione","Attenzione in pista","Stima + 1 giro","PAUSA","PAUSA / REPLAY","PEDALI / CONTROLLI","GRUPPO / GIRO COMPLETO","MARCIA","ANTERIORE SINISTRA","ANTERIORE DESTRA","CAMBIA MARCIA","BOX / ENERGIA","SOSTA EFFETTUATA","BOX IN QUESTO GIRO","CORSIA BOX","LIMITATORE BOX","FINESTRA BOX CHIUSA","FINESTRA BOX APERTA","REPLAY","POSIZIONI GENERALI / C — CLASSE","POSIZIONE","POSIZIONE / CLASSE","SOGLIA SIMHUB","ULTIMI GIRI   /   Δ DAL MIGLIORE","ULTIMO GIRO","PROVE LIBERE","LIMITE BOX SUPERATO","VELOCITÀ ECCESSIVA","PRECEDENTE","GIRO PREVISTO","PREVISIONE: SUFFICIENTE","AVANZAMENTO SPECIALE","AVANZAMENTO SPECIALE","DISTANZA PERCORSA","Fluidità di acceleratore e freno","Pianifica la sosta in base all’autonomia","Previsione sul consumo medio","Percentuale della capacità energetica","DIFFERENZA TEMPERATURE   ","DIFFERENZA TRA GOMME","WARM-UP","DISTACCO, S","CONSUMO PER GIRO","CONSUMO DISATTIVATO","RISERVA INCLUSA","RISULTATO SPECIALE","RIPARAZIONE","RIPARAZIONE / BOX","Calcolo per giri non applicabile","Calcolo basato solo sul carburante","Riserva già inclusa nel calcolo","Riserva: 15% di un giro · ","RALLENTA","OLTRE LA RISERVA","SEGNALE CAMBIATA","BLU","BANDIERA BLU","PISTA SCIVOLOSA","SCIVOLOSO","VELOCITÀ","STATO","PROVA SPECIALE","CONSUMO MEDIO","STINT","FRIZIONE","Sessione interrotta","Segnale bandiera bianca","Segnale bandiera blu","Segnale bandiera nera","Rispetta il limite della corsia box","Prossimo giro completo a rischio","Riduci il consumo • riserva in esaurimento","Confronto del giro completato nella sessione","ATTUALE","GIRO ATTUALE","TELEMETRIA SESSIONE","PASSO / LAVORO SUL GIRO","PASSO DELLA SESSIONE","TEMPERATURA GOMME","TEMPERATURA GOMME / ","SOLO VALORE RPM","CARBURANTE SUFFICIENTE","CARBURANTE","CARBURANTE NEL SERBATOIO","CARBURANTE NON TRASMESSO","FRENO","PISTA / ARIA","TRAFFICO / STRATEGIA","Temperatura: ","Temperature gomme nel riquadro a destra","Previsione carburante non applicabile","Previsione carburante al centro","Carburante esaurito","Assistenza necessaria","TRAGUARDO","BANDIERE","BANDIERE NON TRASMESSE","BANDIERE NON DISPONIBILI","Segnale di arrivo","AUTONOMIA STIMATA","NUMERI — POSIZIONI   /   BLU — TU   /   AMBRA — PIT","NERA","BANDIERA NERA","GOMME / TELEMETRIA SIMULATORE","SCALA RPM","PENALITÀ / BOX","PENALITÀ: ","RISPARMIA CARBURANTE","AUTO ELETTRICA","Auto elettrica / controllo pedali","kg","km/h","− più veloce     + più lento","− davanti in pista     + dietro in pista"],"pt-BR":["  Pressão: ","  INCIDENTES"," · reserva "," km"," km/h"," vol.","% DA VOLTA","% DA ESPECIAL","/vol.","APEX 27 / AGUARDANDO SESSÃO","APEX 27 FULL / AGUARDANDO SESSÃO","DRIVE THROUGH","FL","FR","GRAN TURISMO / SESSÃO","GT: temperatura da superfície dos pneus","INVÁLIDA","PIT","ENGENHEIRO DE PISTA","RL","RR","SAFETY CAR","STOP & GO","iRacing: desgaste dos pneus sem dados ao vivo","±L — diferença em voltas completas","Δ PARA O RECORDE PESSOAL","Δ PARA A MELHOR DA SESSÃO","Δ ÚLTIMA PARA A MELHOR","TANQUE VAZIO","BALANÇO DOS FREIOS","BRANCA","BANDEIRA BRANCA","TRÁFEGO PRÓXIMO","NO TANQUE","ENERGIA VIRTUAL","TEMPO / DISTÂNCIA / CONTROLE","TEMPO DA ESPECIAL","VOCÊ","VOCÊ  /  ","Energia virtual calculada separadamente","ACELERADOR","CORRIDA","PRESSÃO DOS PNEUS","FALTA","DESCLASSIFICAÇÃO","DISTÂNCIA DA ESPECIAL","ATÉ A CHEGADA","ABASTECER","Pressão: ","Dados de outra sessão","Dados da sessão atual","Dados dos pneus não enviados","Falta para a chegada estimada","Piloto desclassificado","Distância pela telemetria do simulador","Até a chegada: ","AMARELA","BANDEIRA AMARELA","Aguardando telemetria de combustível","TRASEIRO ESQUERDO","TRASEIRO DIREITO","SESSÃO","AUTONOMIA EM VOLTAS","VERDE","BANDEIRA VERDE","Pouca margem para a próxima volta","Sinal verde do jogo","INDICADOR DO JOGO","O jogo não informa o combustível restante","O jogo não envia bandeiras confirmadas","Mudança de aderência na pista","Histórico desde a abertura do painel","MAPA / PROGRESSO DA VOLTA","MAPA / PROGRESSO DA ESPECIAL","CLASSIFICAÇÃO","CLASSE","BANDEIRA QUADRICULADA","CONTROLE","CONTROLE DE VELOCIDADE","VERMELHA","BANDEIRA VERMELHA","VOLTA","VOLTA ","VOLTA INVALIDADA","VOLTAS","O mapa é traçado ao percorrer a pista","Volta invalidada pelo simulador","LIMITE","LIMITE NÃO CONFIRMADO","LIMITADOR LIGADO","LIMITADOR DESLIGADO","RECORDE PESSOAL","MELHOR","MELHOR DA SESSÃO","MARGEM CURTA ATÉ A LINHA","CARRO / CONDIÇÕES","CARRO LENTO","CARRO LENTO","MENU DO JOGO","CONTRA O RELÓGIO","NA PISTA","NENHUMA BANDEIRA ATIVA","SEM DADOS","PRECISA ABASTECER","Sem carro","Sem sinal recebido • pista livre não garantida","Precisa de uma volta completa sem abastecer","ROTAÇÃO","SERVIÇO","APRENDENDO CONSUMO","PIT OBRIGATÓRIO","AGUARDANDO","TEMPO RESTANTE","VOLTAS RESTANTES","Classificação geral","Combustível restante sem previsão","Cuidado na pista","Estimativa + 1 volta","PAUSA","PAUSA / REPLAY","PEDAIS / CONTROLE","PELOTÃO / VOLTA INTEIRA","MARCHA","DIANTEIRO ESQUERDO","DIANTEIRO DIREITO","TROQUE A MARCHA","PIT / ENERGIA","PIT CONCLUÍDO","PIT NESTA VOLTA","PIT LANE","LIMITADOR DE PIT","JANELA DE PIT FECHADA","JANELA DE PIT ABERTA","REPLAY","POSIÇÕES GERAIS / C — NA CLASSE","POSIÇÃO","POSIÇÃO / CLASSE","LIMIAR SIMHUB","ÚLTIMAS VOLTAS   /   Δ PARA A MELHOR","ÚLTIMA VOLTA","TREINO","ACIMA DO LIMITE NO PIT","EXCESSO DE VELOCIDADE","ANTERIOR","PREVISÃO DA VOLTA","PREVISÃO: SUFICIENTE","PROGRESSO DA ESPECIAL","PROGRESSO DA ESPECIAL","DISTÂNCIA PERCORRIDA","Suavidade no acelerador e freio","Planeje a parada pela autonomia","Previsão pelo consumo médio","Porcentagem da capacidade de energia","DIFERENÇA DE TEMPERATURA   ","DIFERENÇA ENTRE PNEUS","AQUECIMENTO","DIFERENÇA, S","CONSUMO NESTA VOLTA","CONSUMO DESLIGADO","RESERVA NO CÁLCULO","RESULTADO DA ESPECIAL","REPARO","REPARO / PIT","Cálculo por volta não se aplica","Cálculo apenas de combustível","Reserva já incluída no cálculo","Reserva: 15% de uma volta · ","REDUZA O RITMO","ALÉM DA RESERVA","SINAL DE TROCA","AZUL","BANDEIRA AZUL","PISTA ESCORREGADIA","ESCORREGADIA","VELOCIDADE","ESTADO","ESPECIAL","CONSUMO MÉDIO","STINT","EMBREAGEM","Sessão interrompida","Sinal de bandeira branca","Sinal de bandeira azul","Sinal de bandeira preta","Observe o limite do pit lane","Próxima volta completa em risco","Poupe combustível • reserva acabando","Comparação da volta concluída na sessão","ATUAL","VOLTA ATUAL","TELEMETRIA DA SESSÃO","RITMO / TREINO DE VOLTA","RITMO DA SESSÃO","TEMPERATURA DOS PNEUS","TEMPERATURA DOS PNEUS / ","APENAS VALOR DE RPM","COMBUSTÍVEL SUFICIENTE","COMBUSTÍVEL","COMBUSTÍVEL NO TANQUE","COMBUSTÍVEL NÃO ENVIADO","FREIO","PISTA / AR","TRÁFEGO / ESTRATÉGIA","Temperatura: ","Temperaturas dos pneus no painel direito","Previsão de combustível não se aplica","Previsão de combustível no centro","Combustível esgotado","Serviço necessário","CHEGADA","BANDEIRAS","BANDEIRAS NÃO ENVIADAS","BANDEIRAS INDISPONÍVEIS","Sinal de chegada","AUTONOMIA ESTIMADA","NÚMEROS — POSIÇÕES   /   AZUL — VOCÊ   /   ÂMBAR — PIT","PRETA","BANDEIRA PRETA","PNEUS / TELEMETRIA DO SIMULADOR","BARRA DE RPM","PUNIÇÃO / PIT","PUNIÇÕES: ","POUPE COMBUSTÍVEL","CARRO ELÉTRICO","Carro elétrico / controle dos pedais","kg","km/h","− mais rápido     + mais lento","− à frente na pista     + atrás na pista"],"pl":["  Ciśnienie: ","  INCYDENTY"," · rezerwa "," km"," km/h"," okr.","% OKRĄŻENIA","% OS","/okr.","APEX 27 / OCZEKIWANIE NA SESJĘ","APEX 27 FULL / OCZEKIWANIE NA SESJĘ","DRIVE THROUGH","FL","FR","GRAN TURISMO / SESJA","GT: temperatura powierzchni opon","NIEWAŻNE","PIT","INŻYNIER WYŚCIGOWY","RL","RR","SAFETY CAR","STOP & GO","iRacing: brak zużycia opon na żywo","±L — różnica pełnych okrążeń","Δ DO REKORDU OSOBISTEGO","Δ DO NAJLEPSZEGO W SESJI","Δ POPRZEDNIEGO DO NAJLEPSZEGO","PUSTY ZBIORNIK","BALANS HAMULCÓW","BIAŁA","BIAŁA FLAGA","POBLISCY KIEROWCY","W ZBIORNIKU","ENERGIA WIRTUALNA","CZAS / DYSTANS / KONTROLA","CZAS ODCINKA","TY","TY  /  ","Energia wirtualna liczona osobno","GAZ","WYŚCIG","CIŚNIENIE OPON","NIEDOBÓR","DYSKWALIFIKACJA","DŁUGOŚĆ OS","DO METY","DOTANKUJ","Ciśnienie: ","Dane z innej sesji","Dane bieżącej sesji","Dane opon nie są przesyłane","Niedobór do prognozowanej mety","Dyskwalifikacja gracza","Dystans z telemetrii symulatora","Do mety: ","ŻÓŁTA","ŻÓŁTA FLAGA","Oczekiwanie na dane paliwa","LEWA TYLNA","PRAWA TYLNA","SESJA","ZASIĘG W OKRĄŻENIACH","ZIELONA","ZIELONA FLAGA","Mała rezerwa na następne okrążenie","Zielony sygnał gry","WSKAŹNIK GRY","Gra nie podaje pozostałego paliwa","Gra nie przesyła potwierdzonych flag","Zmiana przyczepności na torze","Historia od otwarcia panelu","MAPA / POSTĘP OKRĄŻENIA","MAPA / POSTĘP OS","KWALIFIKACJE","KLASA","FLAGA W SZACHOWNICĘ","KONTROLA","KONTROLA PRĘDKOŚCI","CZERWONA","CZERWONA FLAGA","OKRĄŻENIE","OKR. ","OKRĄŻENIE UNIEWAŻNIONE","OKRĄŻENIA","Mapa powstaje podczas jazdy po torze","Symulator unieważnił okrążenie","LIMIT","LIMIT NIEPOTWIERDZONY","OGRANICZNIK WŁĄCZONY","OGRANICZNIK WYŁĄCZONY","REKORD OSOBISTY","NAJLEPSZE","NAJLEPSZE W SESJI","MAŁA REZERWA DO LINII","AUTO / WARUNKI","WOLNY SAMOCHÓD","WOLNE AUTO","MENU GRY","JAZDA NA CZAS","NA TORZE","BRAK AKTYWNEJ FLAGI","BRAK DANYCH","KONIECZNE TANKOWANIE","Brak samochodu","Brak sygnału • nie oznacza wolnego toru","Potrzebne pełne okrążenie bez tankowania","OBROTY","SERWIS","NAUKA ZUŻYCIA","OBOWIĄZKOWY PIT STOP","OCZEKIWANIE","DO KOŃCA SESJI","POZOSTAŁO OKR.","Klasyfikacja generalna","Pozostałe paliwo bez prognozy","Uwaga na torze","Szacunek + 1 okrążenie","PAUZA","PAUZA / POWTÓRKA","PEDAŁY / KONTROLA","STAWKA / CAŁE OKRĄŻENIE","BIEG","LEWA PRZEDNIA","PRAWA PRZEDNIA","ZMIEŃ BIEG","PIT / ENERGIA","PIT WYKONANY","PIT NA TYM OKRĄŻENIU","ALEJA SERWISOWA","OGRANICZNIK PIT","OKNO PIT ZAMKNIĘTE","OKNO PIT OTWARTE","POWTÓRKA","POZYCJE OGÓLNE / C — W KLASIE","POZYCJA","POZYCJA / KLASA","PRÓG SIMHUB","OSTATNIE OKRĄŻENIA   /   Δ DO NAJLEPSZEGO","OSTATNIE OKRĄŻENIE","TRENING","PRZEKROCZONY LIMIT W PIT","PRZEKROCZENIE PRĘDKOŚCI","POPRZEDNIE","PROGNOZA OKRĄŻENIA","PROGNOZA: WYSTARCZY","POSTĘP ODCINKA","POSTĘP OS","PRZEBYTY DYSTANS","Płynność gazu i hamowania","Planuj postój według zasięgu","Prognoza według średniego zużycia","Procent pojemności energii","RÓŻNICA TEMPERATUR   ","RÓŻNICA OPON","ROZGRZEWKA","ODSTĘP, S","ZUŻYCIE NA OKRĄŻENIU","ZUŻYCIE WYŁĄCZONE","REZERWA W OBLICZENIU","WYNIK ODCINKA","NAPRAWA","NAPRAWA / PIT","Wyliczenia na okrążenia nie mają zastosowania","Obliczenie tylko według paliwa","Rezerwa już uwzględniona","Rezerwa: 15% okrążenia · ","ZWOLNIJ","PONAD REZERWĘ","SYGNAŁ ZMIANY BIEGU","NIEBIESKA","NIEBIESKA FLAGA","ŚLISKI TOR","ŚLISKO","PRĘDKOŚĆ","STAN","ODCINEK SPECJALNY","ŚREDNIE ZUŻYCIE","STINT","SPRZĘGŁO","Sesja przerwana","Sygnał białej flagi","Sygnał niebieskiej flagi","Sygnał czarnej flagi","Pilnuj limitu w alei serwisowej","Następne pełne okrążenie zagrożone","Oszczędzaj paliwo • rezerwa się kończy","Porównanie ukończonego okrążenia w sesji","BIEŻĄCE","BIEŻĄCE OKRĄŻENIE","TELEMETRIA SESJI","TEMPO / PRACA NAD OKRĄŻENIEM","TEMPO SESJI","TEMPERATURA OPON","TEMPERATURA OPON / ","TYLKO WARTOŚĆ RPM","WYSTARCZAJĄCO PALIWA","PALIWO","PALIWO W ZBIORNIKU","BRAK DANYCH PALIWA","HAMULEC","TOR / POWIETRZE","RUCH / STRATEGIA","Temperatura: ","Temperatury opon w prawym panelu","Prognoza paliwa nie ma zastosowania","Prognoza paliwa na środku","Paliwo się skończyło","Wymagany serwis","META","FLAGI","FLAGI NIE SĄ PRZESYŁANE","FLAGI NIEDOSTĘPNE","Sygnał mety","SZACOWANY ZASIĘG","LICZBY — POZYCJE   /   NIEBIESKI — TY   /   BURSZTYNOWY — PIT","CZARNA","CZARNA FLAGA","OPONY / TELEMETRIA SYMULATORA","SKALA RPM","KARA / PIT","KARY: ","OSZCZĘDZAJ PALIWO","AUTO ELEKTRYCZNE","Auto elektryczne / kontrola pedałów","kg","km/h","− szybciej     + wolniej","− z przodu na torze     + z tyłu na torze"],"cs":["  Tlak: ","  INCIDENTY"," · rezerva "," km"," km/h"," kol","% KOLA","% RZ","/kolo","APEX 27 / ČEKÁNÍ NA RELACI","APEX 27 FULL / ČEKÁNÍ NA RELACI","DRIVE THROUGH","FL","FR","GRAN TURISMO / JÍZDA","GT: povrchová teplota pneumatik","NEPLATNÉ","PIT","ZÁVODNÍ INŽENÝR","RL","RR","SAFETY CAR","STOP & GO","iRacing: opotřebení pneu není dostupné živě","±L — rozdíl celých kol","Δ K OSOBNÍMU REKORDU","Δ K NEJLEPŠÍMU KOLU RELACE","Δ POSLEDNÍHO K NEJLEPŠÍMU","PRÁZDNÁ NÁDRŽ","ROZLOŽENÍ BRZD","BÍLÁ","BÍLÁ VLAJKA","BLÍZKÉ VOZY","V NÁDRŽI","VIRTUÁLNÍ ENERGIE","ČAS / VZDÁLENOST / OVLÁDÁNÍ","ČAS RYCHLOSTNÍ ZKOUŠKY","VY","VY  /  ","Virtuální energie se počítá samostatně","PLYN","ZÁVOD","TLAK PNEUMATIK","NEDOSTATEK","DISKVALIFIKACE","DÉLKA RZ","DO CÍLE","DOTANKOVAT","Tlak: ","Data nejsou z aktuální jízdy","Data aktuální jízdy","Data pneumatik nejsou přenášena","Nedostatek do odhadovaného cíle","Diskvalifikace hráče","Vzdálenost z telemetrie simulátoru","Do cíle: ","ŽLUTÁ","ŽLUTÁ VLAJKA","Čekání na telemetrii paliva","LEVÁ ZADNÍ","PRAVÁ ZADNÍ","JÍZDA","DOJEZD V KOLECH","ZELENÁ","ZELENÁ VLAJKA","Malá rezerva na další kolo","Zelený signál hry","UKAZATEL HRY","Hra neposílá zbývající palivo","Hra neposílá ověřené vlajky","Změna přilnavosti na trati","Historie od otevření panelu","MAPA / PRŮBĚH KOLA","MAPA / PRŮBĚH RZ","KVALIFIKACE","TŘÍDA","ŠACHOVNICOVÁ VLAJKA","OVLÁDÁNÍ","KONTROLA RYCHLOSTI","ČERVENÁ","ČERVENÁ VLAJKA","KOLO","KOLO ","NEPLATNÉ KOLO","KOLA","Mapa se vytváří při průjezdu tratí","Simulátor zneplatnil kolo","LIMIT","LIMIT NEOVĚŘEN","OMEZOVAČ ZAPNUTÝ","OMEZOVAČ VYPNUTÝ","OSOBNÍ REKORD","NEJLEPŠÍ","NEJLEPŠÍ V RELACI","MALÁ REZERVA DO CÍLE","VŮZ / PODMÍNKY","POMALÝ VŮZ","POMALÝ VŮZ","MENU HRY","JÍZDA NA ČAS","NA TRATI","ŽÁDNÁ AKTIVNÍ VLAJKA","ŽÁDNÁ DATA","NUTNÉ DOTANKOVAT","Žádný vůz","Bez přijatého signálu • trať nemusí být volná","Je třeba celé kolo bez tankování","OTÁČKY","SERVIS","UČENÍ SPOTŘEBY","POVINNÝ PIT STOP","ČEKÁNÍ","ZBÝVÁ V RELACI","ZBÝVAJÍCÍ KOLA","Celkové pořadí","Zbývající palivo bez odhadu","Pozor na trati","Odhad + 1 kolo","PAUZA","PAUZA / ZÁZNAM","PEDÁLY / OVLÁDÁNÍ","STARTOVNÍ POLE / CELÉ KOLO","PŘEVOD","LEVÁ PŘEDNÍ","PRAVÁ PŘEDNÍ","PŘEŘAĎTE","PIT / ENERGIE","PIT SPLNĚN","PIT V TOMTO KOLE","BOXOVÁ ULIČKA","OMEZOVAČ V BOXECH","PIT OKNO ZAVŘENO","PIT OKNO OTEVŘENO","ZÁZNAM","CELKOVÉ POŘADÍ / C — VE TŘÍDĚ","POZICE","POZICE / TŘÍDA","PRÁH SIMHUB","POSLEDNÍ KOLA   /   Δ K NEJLEPŠÍMU","POSLEDNÍ KOLO","TRÉNINK","PŘEKROČEN LIMIT V BOXECH","PŘEKROČENÁ RYCHLOST","PŘEDCHOZÍ","ODHAD KOLA","ODHAD: STAČÍ","PRŮBĚH RYCHLOSTNÍ ZKOUŠKY","PRŮBĚH RZ","UJETÁ VZDÁLENOST","Plynulost plynu a brzdění","Plánujte zastávku podle dojezdu","Odhad podle průměrné spotřeby","Procento energetické kapacity","ROZDÍL TEPLOT   ","ROZDÍLY PNEUMATIK","ZAHŘÍVÁNÍ","ODSTUP, S","SPOTŘEBA V KOLE","SPOTŘEBA VYPNUTA","REZERVA VE VÝPOČTU","VÝSLEDEK RZ","OPRAVA","OPRAVA / PIT","Výpočet podle kol se nepoužívá","Výpočet pouze podle paliva","Rezerva je již zahrnuta ve výpočtu","Rezerva: 15 % kola · ","ZPOMALTE","NAD REZERVU","SIGNÁL ŘAZENÍ","MODRÁ","MODRÁ VLAJKA","KLUZKÁ TRAŤ","KLUZKO","RYCHLOST","STAV","RYCHLOSTNÍ ZKOUŠKA","PRŮMĚRNÁ SPOTŘEBA","STINT","SPOJKA","Relace přerušena","Signál bílé vlajky","Signál modré vlajky","Signál černé vlajky","Hlídejte rychlostní limit v boxech","Další celé kolo je nejisté","Snižte spotřebu • dochází rezerva","Porovnání dokončeného kola v relaci","AKTUÁLNÍ","AKTUÁLNÍ KOLO","TELEMETRIE JÍZDY","TEMPO / ZLEPŠOVÁNÍ KOLA","TEMPO RELACE","TEPLOTA PNEUMATIK","TEPLOTA PNEUMATIK / ","POUZE HODNOTA RPM","DOSTATEK PALIVA","PALIVO","PALIVO V NÁDRŽI","PALIVO NENÍ PŘENÁŠENO","BRZDA","TRAŤ / VZDUCH","PROVOZ / STRATEGIE","Teplota: ","Teploty pneumatik vpravo","Odhad paliva se nepoužívá","Odhad paliva uprostřed","Došlo palivo","Nutný servis","CÍL","VLAJKY","VLAJKY NEJSOU PŘENÁŠENY","VLAJKY NEDOSTUPNÉ","Cílový signál","ODHADOVANÝ DOJEZD","ČÍSLA — POZICE   /   MODRÁ — VY   /   JANTAROVÁ — PIT","ČERNÁ","ČERNÁ VLAJKA","PNEUMATIKY / TELEMETRIE SIMULÁTORU","STUPNICE RPM","PENALIZACE / PIT","PENALIZACE: ","ŠETŘETE PALIVO","ELEKTROMOBIL","Elektromobil / ovládání pedálů","kg","km/h","− rychlejší     + pomalejší","− vpředu na trati     + vzadu na trati"],"tr":["  Basınç: ","  OLAYLAR"," · rezerv "," km"," km/sa"," tur","TUR %","ETAP %","/tur","APEX 27 / OTURUM BEKLENİYOR","APEX 27 FULL / OTURUM BEKLENİYOR","DRIVE THROUGH","FL","FR","GRAN TURISMO / SÜRÜŞ","GT: lastik yüzey sıcaklığı","GEÇERSİZ","PIT","YARIŞ MÜHENDİSİ","RL","RR","SAFETY CAR","STOP & GO","iRacing: anlık lastik aşınması yok","±L — tam tur farkı","Δ KİŞİSEL REKORA","Δ OTURUMUN EN İYİ TURUNA","Δ ÖNCEKİ TURDAN EN İYİYE","DEPO BOŞ","FREN DENGESİ","BEYAZ","BEYAZ BAYRAK","YAKIN TRAFİK","DEPODA","SANAL ENERJİ","SÜRE / MESAFE / KONTROL","ETAP SÜRESİ","SİZ","SİZ  /  ","Sanal enerji ayrı hesaplanır","GAZ","YARIŞ","LASTİK BASINCI","EKSİK","DİSKALİFİYE","ETAP UZUNLUĞU","FİNİŞE KALAN","YAKIT EKLE","Basınç: ","Veriler mevcut sürüşten değil","Mevcut sürüş verileri","Lastik verileri aktarılmıyor","Tahmini finiş için eksik yakıt","Oyuncu diskalifiye edildi","Simülatör telemetrisine göre mesafe","Finişe kalan: ","SARI","SARI BAYRAK","Yakıt telemetrisi bekleniyor","SOL ARKA","SAĞ ARKA","SÜRÜŞ","KALAN TUR MENZİLİ","YEŞİL","YEŞİL BAYRAK","Sonraki tur için rezerv az","Oyunun yeşil sinyali","OYUN GÖSTERGESİ","Oyun kalan yakıtı aktarmıyor","Oyun doğrulanmış bayrak verisi aktarmıyor","Pist tutuşunda değişiklik","Panel açıldığından beri geçmiş","HARİTA / TUR İLERLEMESİ","HARİTA / ETAP İLERLEMESİ","SIRALAMA","SINIF","DAMA BAYRAK","KONTROL","HIZ KONTROLÜ","KIRMIZI","KIRMIZI BAYRAK","TUR","TUR ","TUR İPTAL EDİLDİ","TUR","Harita pistte ilerledikçe oluşur","Tur simülatör tarafından iptal edildi","SINIR","SINIR DOĞRULANMADI","LİMİTÖR AÇIK","LİMİTÖR KAPALI","KİŞİSEL REKOR","EN İYİ","OTURUMUN EN İYİSİ","ÇİZGİYE KADAR REZERV AZ","ARAÇ / KOŞULLAR","YAVAŞ ARAÇ","YAVAŞ ARAÇ","OYUN MENÜSÜ","ZAMANA KARŞI","PİSTTE","AKTİF BAYRAK YOK","VERİ YOK","YAKIT İKMALİ GEREKLİ","Araç yok","Sinyal alınmadı • pistin açık olduğu kesin değil","Yakıt almadan tam tur gerekli","DEVİR","SERVİS","TÜKETİM ÖĞRENİLİYOR","ZORUNLU PİT","BEKLENİYOR","OTURUMDA KALAN","KALAN TUR","Genel sıralama","Tahminsiz kalan yakıt","Pistte dikkat","Tahmin + 1 tur","DURAKLATILDI","DURAKLATMA / TEKRAR","PEDALLAR / KONTROL","YARIŞÇILAR / TÜM TUR","VİTES","SOL ÖN","SAĞ ÖN","VİTES DEĞİŞTİRİN","PİT / ENERJİ","PİT TAMAMLANDI","BU TUR PİTE GİRİN","PİT YOLU","PİT LİMİTÖRÜ","PİT PENCERESİ KAPALI","PİT PENCERESİ AÇIK","TEKRAR","GENEL SIRALAMA / C — SINIFTA","SIRA","SIRA / SINIF","SIMHUB EŞİĞİ","SON TURLAR   /   Δ EN İYİYE","SON TUR","ANTRENMAN","PİT HIZ SINIRI AŞILDI","HIZ SINIRI AŞILDI","ÖNCEKİ","TUR TAHMİNİ","TAHMİN: YETERLİ","ETAP İLERLEMESİ","ETAP İLERLEMESİ","PİSTTE ALINAN MESAFE","Gaz ve fren yumuşaklığı","Menzile göre pit planlayın","Ortalama tüketime göre tahmin","Enerji kapasitesinin yüzdesi","SICAKLIK FARKI   ","LASTİKLER ARASI FARK","ISINMA","FARK, SN","TUR TÜKETİMİ","TÜKETİM KAPALI","HESAPTAKİ REZERV","ETAP SONUCU","ONARIM","ONARIM / PİT","Tur bazlı hesap uygulanmaz","Yalnızca yakıta göre hesap","Rezerv hesaba dahil","Rezerv: turun %15'i · ","YAVAŞLAYIN","REZERV ÜSTÜ","VİTES DEĞİŞİM SİNYALİ","MAVİ","MAVİ BAYRAK","KAYGAN PİST","KAYGAN","HIZ","DURUM","ÖZEL ETAP","ORTALAMA TÜKETİM","STİNT","DEBRİYAJ","Oturum durduruldu","Beyaz bayrak sinyali","Mavi bayrak sinyali","Siyah bayrak sinyali","Pit yolu hız sınırına dikkat","Sonraki tam tur risk altında","Tüketimi azaltın • rezerv tükeniyor","Oturumda tamamlanan turun karşılaştırması","MEVCUT","MEVCUT TUR","SÜRÜŞ TELEMETRİSİ","TEMPO / TUR ÇALIŞMASI","OTURUM TEMPOSU","LASTİK SICAKLIĞI","LASTİK SICAKLIĞI / ","YALNIZCA RPM DEĞERİ","YAKIT YETERLİ","YAKIT","DEPODAKİ YAKIT","YAKIT VERİSİ AKTARILMIYOR","FREN","PİST / HAVA","TRAFİK / STRATEJİ","Sıcaklık: ","Lastik sıcaklıkları sağ panelde","Yakıt tahmini uygulanamaz","Yakıt tahmini ortada","Yakıt bitti","Servis gerekli","FİNİŞ","BAYRAKLAR","BAYRAKLAR AKTARILMIYOR","BAYRAK VERİSİ YOK","Finiş sinyali","TAHMİNİ MENZİL","SAYILAR — SIRALAR   /   MAVİ — SİZ   /   KEHRİBAR — PIT","SİYAH","SİYAH BAYRAK","LASTİKLER / SİMÜLATÖR TELEMETRİSİ","RPM GÖSTERGESİ","CEZA / PİT","CEZALAR: ","YAKIT TASARRUFU YAPIN","ELEKTRİKLİ ARAÇ","Elektrikli araç / pedal kontrolü","kg","km/sa","− daha hızlı     + daha yavaş","− pistte önde     + pistte arkada"],"ja":["  空気圧: ","  インシデント"," · 予備 "," km"," km/h"," 周","% 周回","% ステージ","/周","APEX 27 / セッション待機","APEX 27 FULL / セッション待機","DRIVE THROUGH","FL","FR","GRAN TURISMO / 走行","GT: タイヤ表面温度","無効","PIT","レースエンジニア","RL","RR","セーフティカー","STOP & GO","iRacing: タイヤ摩耗のリアルタイム取得不可","±L — 周回数の差","Δ 自己ベスト比","Δ セッションベスト比","Δ 前周とベストの差","燃料切れ","ブレーキバランス","白旗","白旗","周辺車両","燃料残量","仮想エネルギー","タイム / 距離 / 操作","ステージタイム","自車","自車  /  ","仮想エネルギーは別に確認","アクセル","レース","タイヤ空気圧","不足","失格","ステージ距離","フィニッシュまで","追加給油量","空気圧: ","現在の走行データではありません","現在の走行データ","タイヤデータ未受信","予測フィニッシュまでの不足量","プレイヤー失格","ゲームの走行距離データ","フィニッシュまで: ","黄旗","黄旗","燃料データ待機中","左後輪","右後輪","走行","走行可能周数","緑旗","緑旗","次の1周分の燃料が僅少","ゲームの緑旗信号","ゲームのシフト信号","ゲームが燃料残量を提供しません","ゲームから有効な旗情報なし","路面グリップの変化","ダッシュ起動後の履歴","マップ / 周回進捗","マップ / ステージ進捗","予選","クラス","チェッカーフラッグ","操作","速度管理","赤旗","赤旗","ラップ","ラップ ","ラップ無効","周","走行に合わせてマップを作成","ゲームがラップを無効化","制限","制限速度未確認","リミッター ON","リミッター OFF","自己ベスト","ベスト","セッションベスト","ラインまで燃料僅少","車両 / コンディション","低速車両","低速車","ゲームメニュー","タイムアタック","コース上","有効な旗信号なし","データなし","給油が必要","車両なし","信号未受信 • コースの安全を保証しません","給油せず1周走行してください","回転数","ピット作業","燃費を学習中","義務ピット","待機中","セッション残り時間","残り周数","総合順位","燃料残量のみ・予測なし","コース上は注意","予測 + 1周","一時停止","一時停止 / リプレイ","ペダル / 操作","全車両 / コース全周","ギア","左前輪","右前輪","シフトアップ","ピット / エネルギー","義務ピット完了","この周でピットイン","ピットレーン","ピットリミッター","ピットウィンドウ閉鎖","ピットウィンドウ開放","リプレイ","総合順位 / C — クラス順位","順位","順位 / クラス","SIMHUB 設定値","直近のラップ   /   Δ ベスト比","最終ラップ","練習","ピット速度超過","速度超過","前周","予測ラップタイム","予測: 燃料十分","ステージ進捗","ステージ進捗","走行済み距離","アクセルとブレーキの滑らかさ","燃料残量を見てピットを計画","平均燃費に基づく予測","エネルギー容量に対する割合","温度差   ","タイヤ温度差","ウォームアップ","ギャップ, 秒","1周の燃料消費","燃料消費 OFF","計算内の予備燃料","ステージ結果","修理","修理 / ピット","周回ベースの計算対象外","燃料のみの計算","予備燃料は計算済み","予備: 1周の15% · ","減速してください","予備を除いた余裕","シフト信号","青旗","青旗","滑りやすい路面","低グリップ","速度","状態","スペシャルステージ","平均燃費","スティント","クラッチ","セッション中断","白旗信号","青旗信号","黒旗信号","ピット速度制限に注意","次の1周を走り切れない恐れ","燃料を節約 • 残量僅少","セッション内の完了ラップを比較","現在","現在のラップ","走行テレメトリー","ペース / ラップ改善","セッションペース","タイヤ温度","タイヤ温度 / ","RPM 数値のみ","燃料十分","燃料","タンク内燃料","燃料データなし","ブレーキ","路面 / 気温","車両位置 / 戦略","温度: ","タイヤ温度は右側に表示","燃料予測対象外","燃料予測は中央に表示","燃料がなくなりました","ピット作業が必要","フィニッシュ","フラッグ","旗情報未送信","旗情報なし","フィニッシュ信号","推定走行可能","数字 — 順位   /   青 — 自車   /   琥珀 — PIT","黒旗","黒旗","タイヤ / ゲームデータ","RPM ゲージ","ペナルティ / ピット","ペナルティ: ","燃料を節約","電気自動車","電気自動車 / ペダル操作","kg","km/h","− 速い     + 遅い","− コース上で前方     + コース上で後方"],"ko":["  공기압: ","  인시던트"," · 예비량 "," km"," km/h"," 랩","% 랩","% 스테이지","/랩","APEX 27 / 세션 대기","APEX 27 FULL / 세션 대기","DRIVE THROUGH","FL","FR","GRAN TURISMO / 주행","GT: 타이어 표면 온도","무효","PIT","레이스 엔지니어","RL","RR","세이프티 카","STOP & GO","iRacing: 실시간 타이어 마모 미지원","±L — 주회 수 차이","Δ 개인 최고 대비","Δ 세션 최고 대비","Δ 이전 랩과 최고 랩 차이","연료 소진","브레이크 밸런스","백기","백기","주변 차량","잔여 연료","가상 에너지","시간 / 거리 / 조작","스테이지 기록","내 차량","내 차량  /  ","가상 에너지는 별도 확인","가속","레이스","타이어 공기압","부족량","실격","스테이지 길이","피니시까지","추가 주유량","공기압: ","현재 주행 데이터가 아님","현재 주행 데이터","타이어 데이터 미전송","예상 피니시까지 부족량","플레이어 실격","게임 텔레메트리 기준 거리","피니시까지: ","황기","황기","연료 데이터 대기 중","왼쪽 뒤","오른쪽 뒤","주행","주행 가능 랩","녹기","녹기","다음 랩 연료 여유 부족","게임의 녹기 신호","게임 변속 신호","게임에서 잔여 연료 미제공","게임에서 확인된 깃발 신호 미제공","노면 접지력 변화","대시보드 실행 이후 기록","맵 / 랩 진행","맵 / 스테이지 진행","예선","클래스","체커기","조작","속도 관리","적기","적기","랩","랩 ","랩 무효","랩","주행하며 맵 생성","게임에서 랩 무효 처리","제한","제한 속도 미확인","리미터 켜짐","리미터 꺼짐","개인 최고","최고","세션 최고","계측선까지 연료 부족","차량 / 주행 환경","저속 차량","저속 차량","게임 메뉴","타임 어택","트랙 위","활성 깃발 없음","데이터 없음","주유 필요","차량 없음","수신 신호 없음 • 트랙 안전을 보장하지 않음","주유 없이 한 랩 완주 필요","회전수","정비","연료 소비 학습 중","의무 피트스톱","대기 중","세션 남은 시간","남은 랩","종합 순위","예측 없는 잔여 연료","트랙 주의","예상 + 1랩","일시 정지","일시 정지 / 리플레이","페달 / 조작","전체 차량 / 트랙 한 바퀴","기어","왼쪽 앞","오른쪽 앞","변속","피트 / 에너지","피트스톱 완료","이번 랩에 피트인","피트 레인","피트 리미터","피트 윈도 닫힘","피트 윈도 열림","리플레이","종합 순위 / C — 클래스 순위","순위","순위 / 클래스","SIMHUB 기준값","최근 랩   /   Δ 최고 대비","마지막 랩","연습","피트 제한 속도 초과","속도 초과","이전","예상 랩 타임","예상: 연료 충분","스테이지 진행","스테이지 진행","주행 거리","가속과 제동의 부드러움","잔여량에 맞춰 피트스톱 계획","평균 소비량 기준 예측","에너지 용량 대비 비율","온도 편차   ","타이어 온도 편차","웜업","간격, 초","랩당 소비량","연료 소비 꺼짐","계산에 포함된 예비량","스테이지 결과","수리","수리 / 피트","랩 기준 계산 미적용","연료만 계산","예비량이 이미 계산에 포함됨","예비량: 한 랩의 15% · ","속도를 줄이세요","예비량 초과 여유","변속 신호","청기","청기","미끄러운 노면","미끄럼","속도","상태","스페셜 스테이지","평균 소비량","스틴트","클러치","세션 중단","백기 신호","청기 신호","흑기 신호","피트 레인 제한 속도 주의","다음 한 랩 완주가 어려울 수 있음","연료 절약 • 잔여량 부족","세션에서 완주한 랩 비교","현재","현재 랩","주행 텔레메트리","페이스 / 랩 개선","세션 페이스","타이어 온도","타이어 온도 / ","RPM 수치만 표시","연료 충분","연료","탱크 잔여 연료","연료 데이터 미전송","브레이크","노면 / 기온","주변 차량 / 전략","온도: ","타이어 온도는 오른쪽에 표시","연료 예측 미적용","연료 예측은 중앙에 표시","연료가 소진됨","정비 필요","피니시","깃발","깃발 신호 미전송","깃발 정보 없음","피니시 신호","예상 주행 가능","숫자 — 순위   /   파랑 — 내 차량   /   주황 — PIT","흑기","흑기","타이어 / 게임 텔레메트리","RPM 게이지","페널티 / 피트","페널티: ","연료 절약","전기차","전기차 / 페달 조작","kg","km/h","− 빠름     + 느림","− 트랙 앞쪽     + 트랙 뒤쪽"],"zh":["  胎压: ","  事故点数"," · 预留 "," km"," km/h"," 圈","% 圈进度","% 赛段进度","/圈","APEX 27 / 等待场次","APEX 27 FULL / 等待场次","DRIVE THROUGH","FL","FR","GRAN TURISMO / 驾驶","GT: 轮胎表面温度","无效","PIT","比赛工程师","RL","RR","安全车","STOP & GO","iRacing: 不提供实时轮胎磨损","±L — 相差整圈数","Δ 对比个人最佳","Δ 对比本节最佳","Δ 上圈对比最佳","燃油耗尽","制动平衡","白旗","白旗","附近车辆","剩余燃油","虚拟能量","时间 / 距离 / 操作","赛段用时","你","你  /  ","虚拟能量另行计算","油门","正赛","轮胎气压","缺口","取消资格","赛段长度","距终点","需补加燃油","胎压: ","数据并非来自当前驾驶","当前驾驶数据","未传输轮胎数据","预计完赛燃油缺口","玩家被取消资格","模拟器遥测距离","距终点: ","黄旗","黄旗","等待燃油遥测","左后轮","右后轮","驾驶","可跑圈数","绿旗","绿旗","下一圈燃油余量不足","游戏绿旗信号","游戏换挡提示","游戏未提供剩余燃油","游戏未提供可确认的旗语","赛道抓地力变化","仪表盘启动后的记录","地图 / 圈进度","地图 / 赛段进度","排位赛","组别","方格旗","操作","速度监控","红旗","红旗","圈","圈 ","圈速无效","圈","行驶时逐步生成地图","模拟器判定圈速无效","限制","限速未确认","限速器开启","限速器关闭","个人最佳","最佳","本节最佳","到计时线前燃油不足","车辆 / 环境","慢车","慢车","游戏菜单","计时挑战","赛道上","无当前旗语","无数据","需要加油","无车辆","未收到信号 • 不代表赛道畅通","需不加油完成一整圈","转速","维修","学习油耗中","强制进站","等待中","本节剩余时间","剩余圈数","总排名","剩余燃油，无预测","赛道注意安全","估算 + 1圈","暂停","暂停 / 回放","踏板 / 操作","全场车辆 / 整圈","挡位","左前轮","右前轮","升挡","进站 / 能量","进站已完成","本圈进站","维修区通道","维修区限速器","进站窗口关闭","进站窗口开放","回放","总排名 / C — 组别排名","排名","排名 / 组别","SIMHUB 阈值","最近圈速   /   Δ 对比最佳","最后一圈","练习","维修区超速","超速","上一圈","预测圈速","预计燃油足够","赛段进度","赛段进度","已行驶距离","油门与制动平顺性","根据余量安排进站","按平均油耗预测","占能量容量百分比","温差   ","轮胎温差","热身","差距, 秒","单圈油耗","燃油消耗关闭","计算内预留燃油","赛段成绩","维修","维修 / 进站","不适用圈数计算","仅按燃油计算","已计入预留燃油","预留: 单圈用量15% · ","降低速度","超出预留的余量","换挡提示","蓝旗","蓝旗","赛道路面易滑","路滑","速度","状态","特殊赛段","平均油耗","单段行驶","离合","本节已中止","白旗信号","蓝旗信号","黑旗信号","留意维修区限速","可能不足以跑完下一圈","节省燃油 • 余量将尽","对比本节已完成圈速","当前","当前圈","驾驶遥测","节奏 / 圈速提升","本节节奏","轮胎温度","轮胎温度 / ","仅显示 RPM 数值","燃油足够","燃油","油箱剩余燃油","未传输燃油数据","制动","赛道 / 气温","车流 / 策略","温度: ","轮胎温度见右侧","燃油预测不适用","燃油预测见中央","燃油已耗尽","需要维修","完赛","旗语","未传输旗语","旗语不可用","完赛信号","预计可跑","数字 — 排名   /   蓝色 — 你   /   琥珀色 — PIT","黑旗","黑旗","轮胎 / 模拟器遥测","RPM 刻度","处罚 / 进站","处罚: ","节省燃油","电动车","电动车 / 踏板操作","kg","km/h","− 更快     + 更慢","− 赛道前方     + 赛道后方"]};
// Dashboard-local language setting wins over the optional SimHub language bridge.
// Never infer the SimHub UI language from Windows, browser or JavaScript culture.
function a27normalizeLanguage(value) {
  if (value === null || value === undefined) return '';
  var code=String(value).toLowerCase().replace(/_/g,'-').replace(/^\s+|\s+$/g,'');
  if(code==='auto'||code==='')return '';
  if(/^pt(?:-|$)/.test(code))return 'pt-BR';
  if(/^zh(?:-|$)/.test(code))return 'zh';
  var language=code.split('-')[0];
  return Object.prototype.hasOwnProperty.call(A27_CATALOGS,language)?language:'';
}
function a27languageChoice() {
  var choice=a27p('Settings.ApexLanguage.Key');
  return choice===null?'auto':String(choice);
}
function a27lang() {
  var manual=a27normalizeLanguage(a27languageChoice());
  if(manual!=='')return manual;
  return a27normalizeLanguage(a27p('Apex27LanguagePlugin.Code'))||'en';
}
function a27t(index) {
  var values=A27_CATALOGS[a27lang()],fallback=A27_CATALOGS.en;
  return values&&typeof values[index]==='string'?values[index]:typeof fallback[index]==='string'?fallback[index]:'';
}
function a27font() {
  var language=a27lang();
  return language==='ja'?'Yu Gothic UI':language==='ko'?'Malgun Gothic':language==='zh'?'Microsoft YaHei UI':'Segoe UI';
}

// APEX 27 — local dashboard extension. ES5 / SimHub Jint compatible.
// Read-only: no controls, file access, network access or pit commands.
var A27_RESERVE_LAPS = 0.15;
var A27_RESERVE_LITERS = 0.5;
function a27p(name) { try { var v = $prop(name); return v === undefined ? null : v; } catch (e) { return null; } }
function a27n(name) { var v = a27p(name); if (v === null || v === '' || typeof v === 'boolean') return null; var n = Number(v); return isFinite(n) ? n : null; }
function a27d(name) { return a27live() ? a27p('DataCorePlugin.GameData.NewData.' + name) : null; }
function a27dn(name) { return a27live() ? a27n('DataCorePlugin.GameData.NewData.' + name) : null; }
function a27yes(v) { return v === true || v === 1 || v === 'True' || v === 'true'; }
function a27live() { return a27yes(a27p('DataCorePlugin.GameRunning')); }
function a27game() { return String(a27p('DataCorePlugin.CurrentGame') || '').toLowerCase().replace(/[^a-z0-9]/g,''); }
function a27ir() { return a27game().indexOf('iracing') >= 0; }
function a27gt() { var g=a27game(); return g.indexOf('granturismo')>=0 || g.indexOf('gt7')>=0 || g.indexOf('gtsport')>=0; }
function a27f1() { return /^f120(1[789]|2[0-9])$/.test(a27game()); }
function a27wrc() { return a27game().indexOf('eawrc')>=0; }
function a27rallyGame() { return /dirtrally|eawrc|assettocorsarally|richardburns|rbr|grally/.test(a27game()); }
function a27stage() { var g=a27game();if(!a27rallyGame())return false;if(/dirtrally/.test(g)){var n=String(a27d('TrackName')||'').replace(/ - (Full|Clubman|Junior) Circuit$/i,'').toLowerCase();if(/^(mettet|trois-rivieres|lydden hill|silverstone|lohéac\. bretagne|estering|bikernieki|hell|montalegre|killarney international raceway|circuit de barcelona-catalunya|höljes|yas marina circuit|dirt ?fish)$/.test(n))return false;}return true; }
function a27pit() { return !a27rallyGame() && (a27yes(a27d('IsInPitLane')) || a27yes(a27d('IsInPit'))); }
function a27electric() { var e=a27p('GameRawData.Graphics.engine_type');return a27game().indexOf('assettocorsaevo')>=0 && (String(e)==='1' || String(e).toUpperCase()==='ACEVO_ELECTRIC_MOTOR'); }
function a27normalizedInvalid() { if(a27stage())return false;if(a27f1()){var f=a27p('GameRawData.PlayerLapData.m_currentLapInvalid');if(f!==null)return a27yes(f);} return a27yes(a27d('LapInvalidated')); }
function a27str(v, fallback) { return v === null || v === undefined || v === '' ? (fallback || '—') : String(v); }
function a27num(v, digits, suffix) { return v === null || !isFinite(v) ? '—' : v.toFixed(digits) + (suffix || ''); }
function a27signed(v, digits, suffix) { return v === null || !isFinite(v) ? '—' : (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(digits) + (suffix || ''); }
function a27short(v, count) { v = a27str(v); return v.length > count ? v.slice(0, count - 1) + '…' : v; }
function a27seconds(v) {
  if (v === null || v === undefined || v === '') return null;
  if (typeof v.TotalSeconds === 'number') return isFinite(v.TotalSeconds) ? v.TotalSeconds : null;
  try { if (typeof timespantoseconds === 'function') { var ts = timespantoseconds(v); if (ts !== null && isFinite(Number(ts))) return Number(ts); } } catch (e) {}
  var s = String(v), m = /^(?:(\d+)\.)?(\d+):(\d+):(\d+(?:\.\d+)?)$/.exec(s);
  if (m) return Number(m[1] || 0) * 86400 + Number(m[2]) * 3600 + Number(m[3]) * 60 + Number(m[4]);
  return null;
}
function a27time(v, precise) {
  var s = a27seconds(v); if (s === null || s <= 0 || s > 864000) return '—';
  var ms = Math.round(s * 1000), mins = Math.floor(ms / 60000), sec = Math.floor(ms / 1000) % 60;
  return mins + ':' + ('0' + sec).slice(-2) + (precise ? '.' + ('00' + (ms % 1000)).slice(-3) : '');
}
function a27progress() { var v = a27dn('TrackPositionPercent'); return v !== null && v >= 0 && v <= 1 ? v : null; }
function a27race() { return !a27stage() && String(a27d('SessionTypeName') || '').toLowerCase().indexOf('race') >= 0; }
function a27knownTrack() { var n=String(a27d('TrackName')||'').toLowerCase().replace(/^\s+|\s+$/g,''); return n!=='' && !/^(unknown|n\/a|none|track|0|-)$/.test(n); }
function a27personal() { var v=!a27stage()&&a27knownTrack()?a27p('PersistantTrackerPlugin.AllTimeBest'):null,s=a27seconds(v);return s>0&&s<=864000?v:null; }
function a27reference() { if(a27stage())return {seconds:null,session:false};var best = a27seconds(a27d('BestLapTime')); if (best > 0) return {seconds:best,session:true}; best = a27seconds(a27personal()); return {seconds:best > 0 ? best : null,session:false}; }
function a27delta() { if (!a27live() || a27invalid() || !a27knownTrack() || a27progress()===null) return null; var ref = a27reference(); if (!(ref.seconds > 0)) return null; return a27n('PersistantTrackerPlugin.'+(ref.session ? 'SessionBest' : 'AllTimeBest')+'LiveDeltaSeconds'); }
function a27prediction() { var d = a27delta(), best = a27reference().seconds; return d !== null && best > 0 && best+d > 0 ? a27time({TotalSeconds:best+d},true) : '—'; }
function a27deltaColor() { if(a27stage())return '#FF8CCEFF';var d = a27knownTrack()?a27delta():a27lapDifference(); return d === null ? '#FF8C9BAA' : d <= 0 ? '#FF64E3B1' : '#FFFFB35C'; }
function a27session() { if(!a27live())return a27t(111);if(a27stage())return a27t(176);var s=String(a27d('SessionTypeName')||''),k=s.toLowerCase();return a27race()?a27t(41):/qual/.test(k)?a27t(74):/practice|test/.test(k)?a27t(140):/hotlap|time.?attack|time.?trial/.test(k)?a27t(99):/stint/.test(k)?a27t(178):/warm/.test(k)?a27t(155):k===''||/unknown|none|cruise/.test(k)?a27t(61):s.toUpperCase(); }
function a27fuelScale() { if(!a27f1())return 1;var v=a27dn('Fuel'),raw=a27dn('FuelRaw');if(v>0&&raw>0)return raw/v;return /gal/i.test(String(a27d('FuelUnit')||'')) ? 1/0.264172 : 1; }
function a27fuel() {
  var f = a27dn('Fuel'), c = a27n('DataCorePlugin.Computed.Fuel_LitersPerLap');
  var lap = a27dn('CurrentLap'), cap = a27dn('MaxFuel');
  var scale=a27fuelScale();if(f!==null)f*=scale;if(c!==null)c*=scale;if(cap!==null)cap*=scale;
  if(a27wrc() || a27electric()) { f=null; c=null; }
  if(/dirtrally/.test(a27game()) && !(f>0))f=null;
  if (!a27live() || f === null || f < 0 || (f === 0 && !(cap > 0))) f = null;
  if (!a27live() || a27stage() || (a27game()==='rrre'&&a27n('GameRawData.FuelUseActive')===0) || !(c > 0) || c > 1000 || (cap > 0 && c > cap) || !(lap >= 2)) c = null;
  var range = f !== null && c !== null ? f / c : null;
  var unit = a27unit().toLowerCase();
  var minReserve = unit.indexOf('gal') >= 0 ? A27_RESERVE_LITERS / (unit.indexOf('uk') >= 0 || unit.indexOf('imp') >= 0 ? 4.54609 : 3.78541) : A27_RESERVE_LITERS;
  var reserve = c === null ? null : Math.max(minReserve, c * A27_RESERVE_LAPS);
  var progress = a27progress(), remaining = null, approx = false;
  var total = a27dn('TotalLaps'), rem = a27dn('RemainingLaps'),raw=null;
  if(a27ir()) {
    raw=h2irRaw();total=h2irRaceLapLimit(raw);
    var completed=h2irNumber(raw,'LapCompleted');
    if(completed===null)completed=a27dn('CompletedLaps');
    rem=total!==null&&completed!==null&&completed>=0?Math.max(0,total-completed):null;
  }
  var race = a27race();
  var lapLimited = total > 0 && total < 10000;
  if(race&&lapLimited&&a27ir())remaining=h2irFuelRaceRemaining(raw,total);
  else if (race && lapLimited && rem !== null && rem >= 1 && rem <= total && progress !== null) remaining = Math.max(0, rem - progress);
  if (race && !lapLimited) {
    var seconds = a27ir()?h2irNumber(raw,'SessionTimeRemain'):null;
    if(seconds===null)seconds=a27seconds(a27d('SessionTimeLeft'));
    var best = a27seconds(a27d('BestLapTime'));
    if (seconds !== null && seconds >= 0 && seconds < 86400 && best > 20) { remaining = Math.ceil(seconds / best) + 1; approx = true; }
  }
  var margin = f !== null && c !== null && remaining !== null ? f - c * remaining - reserve : null;
  return { fuel:f, rate:c, range:range, reserve:reserve, remaining:remaining, approximate:approx, margin:margin,
    add:margin === null ? null : Math.max(0, -margin), toLine:progress === null ? null : 1 - progress };
}
function a27fuelState() {
  var s = a27fuel();
  if(a27electric())return [a27t(223),a27t(205),'#FF8CCEFF'];
  if(a27wrc())return [a27t(199),a27t(68),'#FF8C9BAA'];
  if(a27game()==='rrre'&&a27n('GameRawData.FuelUseActive')===0)return [a27t(158),a27t(115),'#FF8CCEFF'];
  if (s.fuel === null) return [a27t(102), a27t(58), '#FF8C9BAA'];
  if (s.fuel === 0) return [a27t(28), a27t(207), '#FFFF6B70'];
  if(a27stage())return [a27t(198),a27t(163),'#FF8CCEFF'];
  if (s.rate === null) return [a27t(109), a27t(106), '#FFFFB35C'];
  if (s.toLine !== null && s.range < s.toLine + s.reserve / s.rate) return [a27t(94), a27t(186), '#FFFF6B70'];
  if (s.margin !== null && s.margin >= 0) return [s.approximate ? a27t(145) : a27t(196), /^(lmu|rrre)$/.test(a27game())?a27t(164):a27t(165), '#FF64E3B1'];
  if (s.toLine !== null && s.range < s.toLine + 1 + s.reserve / s.rate) return a27f1()?[a27t(222),a27t(65),'#FFFFB35C']:[a27t(128), a27t(185), '#FFFFB35C'];
  if (s.margin !== null && s.margin < 0) return a27f1()?[a27t(222),a27t(52),'#FFFFB35C']:[a27t(103), a27t(150), '#FFFFB35C'];
  return [a27t(62), a27t(151), '#FF8CCEFF'];
}
function a27fuelColor() { return a27fuelState()[2]; }
function a27unit() { if(a27f1())return a27t(225);var u=a27str(a27d('FuelUnit'),'L');return /^(l|liters?|litres?)$/i.test(u)?'L':/^(gal|gallons?)$/i.test(u)?'gal':u; }
function a27fuelUsed(name) { var v=a27live()?a27n('DataCorePlugin.Computed.'+name):null; return v!==null && v>=0 && !a27electric() && !a27wrc() ? v*a27fuelScale() : null; }
function a27relative(side, index, field) {
  if (!a27live()) return null;
  return a27p('PersistantTrackerPlugin.Driver' + side + '_' + ('0' + index).slice(-2) + '_' + field);
}
function a27gap(side, index) {
  if (!a27relative(side, index, 'Name')) return '—';
  var v = a27relative(side, index, 'Gap');
  if (v === null || v === '') return '—';
  var n = Number(v); if (!isFinite(n)) return '—';
  return (side === 'Ahead' ? '−' : '+') + Math.abs(n).toFixed(1);
}
function a27driver(relative, field) {
  if (!a27live()) return field === 'name' ? a27t(104) : '—';
  try {
    var pos = getopponentleaderboardposition_aheadbehind(relative);
    if (!(pos > 0) || !driveravailable(pos)) return field === 'name' ? a27t(104) : '—';
    if (field === 'name') return a27short(drivername(pos), 22);
    if (field === 'pos') { var p = driverposition(pos); return p > 0 ? 'P' + p : '—'; }
    if (field === 'pit') return driveriscarinpitlane(pos) || driveriscarinpit(pos) ? a27t(17) : '';
    if (field === 'gap') { var g = driverrelativegaptoplayer(pos); if (g === null || !isFinite(Number(g))) return '—'; return (relative < 0 ? '−' : '+') + Math.abs(Number(g)).toFixed(1); }
  } catch (e) {
    var side = relative < 0 ? 'Ahead' : 'Behind', i = Math.abs(relative) - 1;
    if (field === 'name') return a27short(a27relative(side,i,'Name'),22);
    if (field === 'gap') return a27gap(side,i);
    return field === 'pit' ? '' : '—';
  }
  return '—';
}
function a27position() { var n = a27dn('Position'); return n > 0 ? 'P' + n : '—'; }
// Whole-field ribbon: native SimHub list includes the player, indices are 1-based.
function a27fieldCount() { var n = a27dn('OpponentsCount'); return n !== null && n > 0 ? Math.floor(n) : 0; }
function a27fieldPoint(index) {
  if (!a27live()) return null;
  try {
    if (!driveravailable(index)) return null;
    if (a27ir() && driverisconnected(index) === false) return null;
    var p = drivertrackpositionpercent(index);
    return p !== null && p !== undefined && p !== '' && isFinite(Number(p)) && Number(p) >= 0 && Number(p) <= 1 ? Number(p) : null;
  } catch (e) { return null; }
}
function a27field(index, field) {
  var p = a27fieldPoint(index),fallback=field==='visible'?false:field==='left'?32:field==='fill'?'#FF182430':field==='color'?'#FFDEE6EC':'';
  if (p === null) return fallback;
  try {
    if (field === 'visible') return !driverisplayer(index);
    if (field === 'left') return 32 + p * 1824;
    if (field === 'label') { var pos = driverposition(index); return pos > 0 ? String(pos) : '·'; }
    var pit = driveriscarinpitlane(index) || driveriscarinpit(index);
    if (field === 'fill') return pit ? '#FF49341C' : '#FF182430';
    if (field === 'color') return pit ? '#FFFFB35C' : '#FFDEE6EC';
  } catch (e) { return fallback; }
  return '';
}
function a27fieldEnabled() {
  if (!a27live() || !a27race() || a27game()==='f12017') return false;
  for (var i=1,n=a27fieldCount();i<=n;i++) {
    if (a27field(i,'visible')) return true;
  }
  return false;
}
function a27lap() { var lap = a27dn('CurrentLap'), total = a27dn('TotalLaps'); return !(lap > 0) ? '—' : String(lap) + (total > 0 && total < 10000 ? ' / ' + total : ''); }
function a27remaining() { var r = a27dn('RemainingLaps'), total = a27dn('TotalLaps'); if (a27race() && total > 0 && total < 10000) return r >= 1 && r <= total ? r+a27t(5) : '—'; var s = a27seconds(a27d('SessionTimeLeft')); if (s !== null && s > 0 && s < 86400) return a27time(a27d('SessionTimeLeft'), false); return '—'; }
function a27incidents() { if (!a27ir() || !a27live()) return '—'; return a27num(a27n('GameRawData.Telemetry.PlayerCarMyIncidentCount'), 0, 'x'); }
function a27pitLimit() { if(a27rallyGame()||a27gt())return null;if(a27f1()){var f=a27n(a27game()==='f12017'?'GameRawData.m_pit_speed_limit':'GameRawData.PacketSessionData.m_pitSpeedLimit');if(f>0&&f<250)return f;}if(a27game()==='rrre'){var r=a27n('GameRawData.SessionPitSpeedLimit');if(r>0&&r<100)return r*3.6;}if(/assettocorsacompetizione|assettocorsaevo/.test(a27game()))return null;var n = a27dn('PitLimiterSpeedMs'); return n > 0 && n < 100 ? n * 3.6 : null; }
function a27pitColor() { var speed = a27dn('SpeedKmh'), limit = a27pitLimit(); return limit !== null && speed !== null && speed > limit + 0.5 ? '#FFFF6B70' : '#FF8CCEFF'; }
function a27celsius(v) { var u=String(a27d('TemperatureUnit')||'C').toLowerCase();return /f|fahrenheit/.test(u)?(v-32)/1.8:/k|kelvin/.test(u)?v-273.15:v; }
function a27tyreValue(corner,kind) { if(a27ir()||!a27live())return null;if(kind==='Pressure'&&a27gt())return null;var v=a27dn('Tyre'+kind+corner);if(v===null)return null;if(kind==='Temperature'){var c=a27celsius(v);return c>=-60&&c<350&&Math.abs(c)>0.01?v:null;}return v>0?v:null; }
function a27tyre(corner, kind) { var n=a27tyreValue(corner,kind),u=String(a27d('TyrePressureUnit')||'').toLowerCase();return n===null?'—':n.toFixed(kind==='Temperature'?0:u==='bar'?2:u==='kpa'?0:1); }
function a27hasTyre(kind) { var corners=['FrontLeft','FrontRight','RearLeft','RearRight'];for(var i=0;i<4;i++)if(a27tyreValue(corners[i],kind)!==null)return true;return false; }
function a27tyres() { return a27hasTyre('Temperature')||a27hasTyre('Pressure'); }
function a27tempUnit() { var s=String(a27d('TemperatureUnit')||'C');return /k/i.test(s)?'K':'°'+s.replace('°',''); }
function a27pedal(name) { var n=a27dn(name);return n!==null&&n>=0&&n<=100?n:null; }
function a27traffic() { return a27race()&&a27fieldCount()>1; }
function a27map() { var allow=a27d('MapAllowed');return allow!==false&&allow!==0&&a27knownTrack()&&a27progress()!==null; }
function a27rightTyres() { return !a27pit()&&!a27map()&&a27tyres(); }
function a27rightInputs() { return !a27pit()&&!a27map()&&!a27tyres(); }
function a27distance(remaining) { var length=a27dn('TrackLength'),p=a27progress();if(!(length>0)||(remaining&&p===null))return '—';return ((remaining?length*(1-p):length)/1000).toFixed(2)+a27t(3); }
function a27progressText() { var p=a27progress();return p===null?'—':Math.round(p*100)+'%'; }
function a27stageFinished() { if(!a27stage())return false;var result=a27wrc()?a27n('GameRawData.SessionUpdate.stage_result_status'):null;if(result!==null)return result===1;return a27seconds(a27d('CurrentLapTime'))===0 && a27seconds(a27d('LastLapTime'))>0 && (a27progress()>=0.999||a27dn('CompletedLaps')>0); }
function a27trackTitle() { return a27knownTrack()?a27short(a27d('TrackName'),51):a27gt()?a27t(14):a27str(a27p('DataCorePlugin.CurrentGame')); }
function a27runTime() {
  if(!a27driving()&&!a27playback())return '—';
  var s=a27ir()?h2irNumber(h2irRaw(),'LapCurrentLapTime'):null;
  if(s===null)s=a27seconds(a27d('CurrentLapTime'));
  return a27time(s>0?{TotalSeconds:s}:a27stageFinished()?a27d('LastLapTime'):null,true);
}
function a27lapDifference() { var last=a27seconds(a27d('LastLapTime')),best=a27seconds(a27d('BestLapTime'));return last>0&&best>0?last-best:null; }
function a27topBestLabel() { return a27race()?a27t(135):a27stage()?a27t(45):a27personal()!==null?a27t(91):a27t(93); }
function a27topBest() { return a27race()?a27position():a27stage()?a27distance(false):a27time(a27personal()!==null?a27personal():a27d('BestLapTime'),true); }
function a27temperature(name) { var v = a27dn(name);return v===null||Math.abs(a27celsius(v))<0.01 ? '—' : v.toFixed(0)+a27tempUnit(); }
function a27bias() { var n = a27dn('BrakeBias'); return n > 0 && n <= 100 ? n.toFixed(1) + '%' : '—'; }
function a27carInfo() { return a27bias()!=='—'||a27temperature('RoadTemperature')!=='—'||a27temperature('AirTemperature')!=='—'; }
function a27tyreSpread() { var corners=['FrontLeft','FrontRight','RearLeft','RearRight'],lo=null,hi=null,count=0;for(var i=0;i<4;i++){var v=a27tyreValue(corners[i],'Temperature');if(v!==null){lo=lo===null?v:Math.min(lo,v);hi=hi===null?v:Math.max(hi,v);count++;}}return count>1?(hi-lo).toFixed(0)+a27tempUnit():'—'; }
// Record each lap transition once in the dashboard scope.
function a27history() {
  var key = [a27p('DataCorePlugin.CurrentGame'), a27d('TrackCode'), a27d('TrackName'), a27d('CarId'), a27d('CarModel'), a27d('SessionTypeName'), a27p('GameRawData.Telemetry.SessionNum'),a27p('GameRawData.StaticInfo.session_id'),a27p('GameRawData.StaticInfo.event_id')].join('|');
  var lap = a27dn('CurrentLap'), now = a27seconds(a27d('CurrentLapTime'));
  var s = A27_STATE.a27history;
  var restart = a27yes(a27d('IsSessionRestart'));
  if (!s || s.key !== key || !a27live() || (restart && !s.restart) || (lap !== null && lap < s.lap)) s = {key:key, lap:lap, rows:[], observed:false, invalid:false};
  if (a27live() && lap !== null && s.lap !== null && lap === s.lap + 1) {
    var t = a27seconds(a27d('LastLapTime'));
    if (t > 0 && s.observed) { s.rows.unshift({lap: s.lap, time: a27time(a27d('LastLapTime'), true), seconds:t, invalid:s.invalid}); s.rows = s.rows.slice(0,4); }
    s.observed = false; s.invalid = false;
  }
  if (now > 5) s.observed = true;
  if (a27invalid()) s.invalid = true;
  s.lap = lap; s.restart = restart; A27_STATE.a27history = s; return s.rows;
}
function a27historyCell(index, field) {
  var rows = a27history(), r = rows[index]; if (!r) return '—';
  if (field === 'lap') return a27t(82) + r.lap;
  if (field === 'time') return r.time;
  if (r.invalid) return a27t(16);
  var best = a27seconds(a27d('BestLapTime')); return best > 0 ? a27signed(r.seconds - best, 2) : '—';
}

// APEX 27 dashboard helpers. ES5/Jint.
var a27OriginalNumber=a27n;
a27n=function(name){var v=a27p(name);if(v===null||v===undefined||typeof v==='boolean'||typeof v==='string'&&/^\s*$/.test(v))return null;var n=Number(v);return isFinite(n)?n:null;};
function a27active(v) { return v===true||v===1||v==='1'||v==='true'||v==='True'; }
function a27playback() { return a27live()&&(a27active(a27p('DataCorePlugin.GameData.GameReplay'))||a27active(a27d('IsGameReplay'))||/^(replay|2)$/.test(String(a27d('ReplayMode')).toLowerCase())); }
function a27paused() { return a27live()&&(a27active(a27p('DataCorePlugin.GameData.GamePaused'))||a27active(a27p('DataCorePlugin.GamePaused'))); }
function a27menu() { return a27live()&&a27active(a27p('DataCorePlugin.GameData.GameInMenu')); }
function a27statusBanner() { return a27playback()?a27t(133):a27paused()?a27t(118):a27menu()?a27t(98):''; }
function a27driving() {
  var on=a27ir()?h2irValue(h2irRaw(),'IsOnTrack'):null;
  if(on===null)on=a27p('GameRawData.Telemetry.IsOnTrack');
  return a27live()&&!a27paused()&&!a27menu()&&!a27playback()&&!(a27ir()&&(on===false||on===0||on==='0'||on==='False'||on==='false'));
}
function a27gear() { if(!a27live())return '—';var g=String(a27d('Gear')===null?'':a27d('Gear')).toUpperCase().replace(/^\s+|\s+$/g,'');return /^(N|R|[1-9]|1[0-2])$/.test(g)?g:'—'; }
function a27rpm() { var n=a27dn('Rpms');return n!==null&&n>=0&&n<60000?n:null; }
function a27shift() {
  var rpm=a27rpm(),g=a27game(),fraction=null,threshold=null,source='none';
  if(!a27driving()||a27electric()||rpm===null)return {fraction:null,threshold:null,source:'none',reached:false};
  if(/^f120(1[89]|2[0-9])$/.test(g)) {var f=a27n('GameRawData.PlayerCarTelemetryData.m_revLightsPercent');if(f!==null&&f>=0&&f<=100){fraction=f/100;source='game';}}
  if(a27wrc()&&a27active(a27p('GameRawData.SessionUpdate.shiftlights_rpm_valid'))) {var start=a27n('GameRawData.SessionUpdate.shiftlights_rpm_start'),end=a27n('GameRawData.SessionUpdate.shiftlights_rpm_end');if(start>0&&end>start&&end<60000){threshold=end;fraction=Math.max(0,Math.min(1,(rpm-start)/(end-start)));source='game';}}
  if(a27ir()) {var ir=a27n('GameRawData.SessionData.DriverInfo.DriverCarSLShiftRPM');if(ir>0&&ir<60000){threshold=ir;source='game';}}
  if(g==='rrre'){var rr=a27dn('Redline');if(rr>0&&rr<60000){threshold=rr;source='game';}}
  if(threshold!==null&&fraction===null)fraction=Math.max(0,Math.min(1,rpm/threshold));
  return {fraction:fraction,threshold:threshold,source:source,reached:source!=='none'&&rpm>0&&/^[1-9]/.test(a27gear())&&fraction>=0.999};
}
function a27rpmScale() { var s=a27dn('CarSettings_MaxRPM');if(!(s>0&&s<60000))s=a27dn('MaxRpm');return s>0&&s<60000?s:null; }
function a27rpmFraction() {var r=a27rpm(),s=a27shift();if(!a27live()||r===null)return null;if(s.fraction!==null)return s.fraction;var max=a27rpmScale();return max!==null?Math.max(0,Math.min(1,r/max)):null;}
function a27rpmSegment(index) {var f=a27rpmFraction();if(f===null||f<(index+1)/16)return '#FF202C37';if(!a27driving())return '#FF738899';if(a27shift().source==='none')return '#FF8CCEFF';return index>=14?'#FFFF6B70':index>=10?'#FFFFB35C':'#FF64E3B1';}
function a27rpmTitle() {return a27shift().reached?a27t(125):a27shift().source==='game'?a27t(67):a27rpmScale()!==null?a27t(219):a27t(195);}
function a27gearColor(){return !a27driving()?'#FF96A6B4':a27shift().reached?'#FFFFB35C':'#FFDEE6EC';}
function a27flagCommon(name){return a27active(a27d('Flag_'+name));}
function a27irFlag(mask,detail){var n=a27n('GameRawData.Telemetry.SessionFlags');if(n!==null)return (n&mask)!==0;return a27active(a27p('GameRawData.Telemetry.SessionFlagsDetails.'+detail));}
// Dual 8x8 flag priority, plus explicit red and low-grip signals.
var A27_FLAG_PRIORITY=['red','dsq','checkered','slow','yellow','debris','blue','black','repair','white','green'];
function a27flagList() {
  if(!a27driving()||a27gt()||a27rallyGame())return [];
  var g=a27game(),flags={red:false,dsq:false,slow:a27ir()&&a27active(a27p('IRacingExtraProperties.iRacing_SlowCarAhead')),black:a27flagCommon('Black'),repair:a27flagCommon('Orange'),yellow:a27flagCommon('Yellow'),debris:false,blue:a27flagCommon('Blue'),white:a27flagCommon('White'),checkered:a27flagCommon('Checkered'),green:a27flagCommon('Green')};
  if(a27ir()) {flags.red=a27irFlag(16,'Isred');flags.dsq=a27irFlag(131072,'Isdisqualify');flags.black=flags.black||a27irFlag(65536,'Isblack');flags.repair=flags.repair||a27irFlag(1048576,'Isrepair');flags.yellow=flags.yellow||a27irFlag(8,'Isyellow')||a27irFlag(256,'IsyellowWaving')||a27irFlag(16384,'IsCaution')||a27irFlag(32768,'IsCautionwaving');flags.blue=flags.blue||a27irFlag(32,'IsBlue');flags.white=flags.white||a27irFlag(2,'Iswhite');flags.checkered=flags.checkered||a27irFlag(1,'Ischeckered');flags.debris=a27irFlag(64,'Isdebris');}
  if(/^f1202[3-9]$/.test(g))flags.red=a27active(a27p('GameRawData.RedFlagShown'));
  if(a27f1()){var fia=a27n(g==='f12017'?'GameRawData.m_vehicleFIAFlags':/^f1202[5-9]$/.test(g)?'GameRawData.PlayerCarStatusData.m_vehicleFIAFlags':'GameRawData.PlayerCarStatusData.m_vehicleFiaFlags');if(fia!==null&&(fia<0||fia>3)){flags.green=false;flags.blue=false;flags.yellow=false;}}
  if(g==='assettocorsacompetizione')flags.red=a27active(a27p('GameRawData.Graphics.globalRed'));
  if(g==='assettocorsaevo') {var ac=a27n('GameRawData.Graphics.flag');flags.red=ac===3;flags.repair=flags.repair||ac===9;flags.debris=ac===10;}
  if(g==='automobilista2') {var am=a27n('GameRawData.mHighestFlagColour');flags.red=am===5;flags.repair=flags.repair||am===9;if(am===3){flags.slow=true;flags.white=false;}}
  // Green is only an explicit transient game signal; other active warnings suppress it.
  var any=false,k;for(k in flags)if(k!=='green'&&flags[k])any=true;if(any)flags.green=false;
  var list=[];for(var i=0;i<A27_FLAG_PRIORITY.length;i++)if(flags[A27_FLAG_PRIORITY[i]])list.push(A27_FLAG_PRIORITY[i]);return list;
}
function a27flagUnavailable() {
  if(!a27driving()||a27gt()||a27rallyGame())return true;
  var g=a27game(),raw;
  if(a27f1()){raw=a27n(g==='f12017'?'GameRawData.m_vehicleFIAFlags':/^f1202[5-9]$/.test(g)?'GameRawData.PlayerCarStatusData.m_vehicleFIAFlags':'GameRawData.PlayerCarStatusData.m_vehicleFiaFlags');if(raw!==null&&(raw<0||raw>3))return true;}
  var names=['Black','Orange','Blue','Checkered','Green','White','Yellow'];for(var i=0;i<names.length;i++)if(a27d('Flag_'+names[i])!==null)return false;return true;
}
function a27flagName(id){var labels={red:a27t(80),dsq:a27t(44),slow:a27t(96),black:a27t(217),repair:a27t(161),yellow:a27t(57),debris:a27t(172),blue:a27t(171),white:a27t(31),checkered:a27t(76),green:a27t(64)};return labels[id]||'';}
function a27flagShortName(id){var labels={red:a27t(79),dsq:'DSQ',slow:a27t(97),black:a27t(216),repair:a27t(161),yellow:a27t(56),debris:a27t(173),blue:a27t(170),white:a27t(30),checkered:a27t(209),green:a27t(63)};return labels[id]||'';}
function a27flagColor(id){var c={red:'#FFFF6B70',dsq:'#FFDEE6EC',slow:'#FFDEE6EC',black:'#FFDEE6EC',repair:'#FFFFB35C',yellow:'#FFFFD65C',debris:'#FFFFB35C',blue:'#FF73B9FF',white:'#FFDEE6EC',checkered:'#FFDEE6EC',green:'#FF64E3B1'};return c[id]||'#FF96A6B4';}
function a27flag(index,part){var id=a27flagList()[index]||'';return part==='id'?id:part==='color'?a27flagColor(id):part==='visible'?id!=='':a27flagName(id);}
function a27flagTitle(){var title=a27flag(0,'name');return title!==''?title:a27statusBanner()!==''?a27statusBanner():a27flagUnavailable()?a27t(212):a27t(101);}
function a27flagDetail(){var id=a27flag(0,'id');if(id==='white'){var am=a27n('GameRawData.mHighestFlagColour');return a27ir()||(a27game()==='automobilista2'&&am===4)?a27t(139):a27game()==='automobilista2'&&am===3?a27t(96):a27t(181);}var labels={red:a27t(180),dsq:a27t(53),slow:a27t(96),black:a27t(183),repair:a27t(208),yellow:a27t(116),debris:a27t(70),blue:a27t(182),checkered:a27t(213),green:a27t(66)};return labels[id]||(a27statusBanner()!==''?a27t(49):a27flagUnavailable()?a27t(69):a27t(105));}
function a27safetyCar(){if(!a27driving()||!/^f120(1[89]|2[0-9])$/.test(a27game()))return '';var s=a27n('GameRawData.PacketSessionData.m_safetyCarStatus');return s===1?a27t(21):s===2?'VSC':'';}
function a27penalty(){if(!a27driving())return '';var g=a27game(),p;
 if(g==='rrre'){if(a27n('GameRawData.Penalties.DriveThrough')!==null&&a27n('GameRawData.Penalties.DriveThrough')>=0)return a27t(11);if(a27n('GameRawData.Penalties.StopAndGo')!==null&&a27n('GameRawData.Penalties.StopAndGo')>=0)return a27t(22);if(a27n('GameRawData.Penalties.SlowDown')!==null&&a27n('GameRawData.Penalties.SlowDown')>=0)return a27t(167);}
 if(g==='automobilista2'){p=a27n('GameRawData.mPitSchedule');if(p===5)return a27t(11);if(p===6)return a27t(22);}
 if(g==='lmu'){p=a27n('GameRawData.PlayerNativeScoring.mNumPenalties');if(p>0)return a27t(221)+p;}
 if(g==='rfactor2'){p=a27n('GameRawData.CurrentPlayer.mNumPenalties');if(p>0)return a27t(221)+p;}
 return '';}
function a27mandatoryPit(){if(!a27driving())return '';var g=a27game(),p;if(g==='automobilista2'&&a27n('GameRawData.mPitSchedule')===4)return a27t(110);if(g==='rrre'){p=a27n('GameRawData.PitWindowStatus');return p===1?a27t(131):p===2?a27t(132):p===3?a27t(108):p===4?a27t(127):'';}return '';}
function a27energy(){if(!a27driving()||a27game()!=='rrre')return null;var left=a27n('GameRawData.VirtualEnergyLeft'),cap=a27n('GameRawData.VirtualEnergyCapacity');return left!==null&&left>=0&&cap>0&&left<=cap?100*left/cap:null;}
function a27strategy(){return a27penalty()!==''||a27mandatoryPit()!==''||a27energy()!==null;}
function a27class(index,part){if(!a27live())return '';try{if(!(index>0)||!driveravailable(index))return '';var name=String(drivercarclass(index)||'').replace(/^\s+|\s+$/g,'');if(!name||/^(unknown|none|0|-)$/i.test(name))return '';if(part==='position'){var p=Number(driverclassposition(index));return p>0&&isFinite(p)?'C'+p:'';}if(part==='color'){var c=String(drivercarclasscolor(index)||'');return /^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(c)?c:'#FF96A6B4';}return a27short(name,11);}catch(e){return '';}}
function a27playerIndex(){try{return getplayerleaderboardposition();}catch(e){return -1;}}
function a27multi(){return a27active(a27d('HasMultipleClassOpponents'))&&a27class(a27playerIndex(),'name')!=='';}
function a27positionClass(){return a27race()&&a27multi()?a27position()+' / '+a27class(a27playerIndex(),'position'):a27topBest();}
function a27relativeClass(relative){if(!a27multi())return '';try{var p=getopponentleaderboardposition_aheadbehind(relative),c=a27class(p,'name');return c!==''?c+' '+a27class(p,'position'):'';}catch(e){return '';}}
function a27relativeLaps(relative){if(!a27live())return '';try{var p=getopponentleaderboardposition_aheadbehind(relative);if(!(p>0)||!driveravailable(p))return '';var n=driverlapstoplayer(p);if(n===null||n===undefined||n==='')return '';n=Number(n);return isFinite(n)&&Math.abs(n)>=1&&Math.abs(n)<1000?(n>0?'+':'−')+Math.abs(n).toFixed(0)+'L':'';}catch(e){return '';}}
function a27classNote(){return a27multi()?a27class(a27playerIndex(),'name')+' / '+a27class(a27playerIndex(),'position'):a27t(114);}
function a27flagPrimary(){if(!a27driving())return a27flagTitle();if(a27flag(0,'id')==='red')return a27flagName('red');if(a27pit())return a27t(129);if(!a27rallyGame()&&a27active(a27d('PitLimiterOn')))return a27t(130);return a27flagTitle();}
function a27flagPrimaryColor(){if(!a27driving())return '#FF96A6B4';if(a27flag(0,'id')==='red')return a27flagColor('red');if(a27pit())return '#FFC1A1FF';return a27flag(0,'color');}
function a27flagPrimaryDetail(){if(a27driving()&&a27pit()&&a27flag(0,'id')!=='red')return a27pitLimit()!==null&&a27dn('SpeedKmh')>a27pitLimit()+0.5?a27t(141):a27active(a27d('PitLimiterOn'))?a27t(89):a27t(90);return a27flagDetail();}
function a27flagSecondary(index,part){var offset=a27driving()&&a27flag(0,'id')!=='red'&&(a27pit()||(!a27rallyGame()&&a27active(a27d('PitLimiterOn'))))?0:1;return part==='name'?a27flagShortName(a27flag(index+offset,'id')):a27flag(index+offset,part);}
function a27cockpitQuiet(){return a27driving()&&a27flagList().length===0&&!a27pit()&&(a27rallyGame()||!a27active(a27d('PitLimiterOn')))&&a27safetyCar()==='';}
function a27cockpitTitle(){return a27cockpitQuiet()?a27num(a27dn('SpeedKmh'),0,a27t(4)):a27flagPrimary();}
function a27cockpitDetail(){return a27cockpitQuiet()?a27flagTitle():a27flagPrimaryDetail()+(a27safetyCar()!==''?' / '+a27safetyCar():'');}
var a27OriginalFuelState=a27fuelState;
a27fuelState=function(){return a27live()&&!a27driving()?[a27statusBanner()||a27t(111),a27t(49),'#FF96A6B4']:a27OriginalFuelState();};

// Dashboard-local traffic sizing. Compact uses eleven rows.
function a27largeTraffic() { return a27p('Settings.ApexTrafficSize.Key') === 'large'; }

// Conservative character-width budget in em, so wide Latin, Cyrillic and CJK
// names remain in the name column. The native text box remains at a fixed size.
function a27trafficShort(value, budget) {
  var text = a27str(value), width = 0, widths = [], indexes = [], i = 0;
  while (i < text.length) {
    var code = text.charCodeAt(i), character = text.charAt(i), units = 1, weight;
    if (code >= 0xD800 && code <= 0xDBFF && i + 1 < text.length && text.charCodeAt(i + 1) >= 0xDC00 && text.charCodeAt(i + 1) <= 0xDFFF) units = 2;
    if (units === 2 || code >= 0x2E80) weight = 1.1;
    else if (/[MW@#%&ЖШЩЮФДЫжшщюф]/.test(character)) weight = 1.1;
    else if (/[ilI1|!.,:;]/.test(character)) weight = 0.34;
    else if (/\s/.test(character)) weight = 0.4;
    else if (/[A-ZА-ЯЁ]/.test(character)) weight = 0.84;
    else if (/[a-zа-яё]/.test(character)) weight = 0.66;
    else if (/[0-9]/.test(character)) weight = 0.7;
    else weight = 0.95;
    width += weight; i += units; widths.push(width); indexes.push(i);
  }
  if (width <= budget) return text;
  var end = 0;
  for (i = 0; i < widths.length; i++) { if (widths[i] + 1 > budget) break; end = indexes[i]; }
  return a27short(text, end + 1);
}
function a27trafficGapSize(relative) {
  var length = String(a27driver(relative, 'gap')).length;
  return length <= 6 ? 44 : length <= 7 ? 37 : length <= 8 ? 32 : 27;
}

// Display preferences use the dashboard's native persistent settings.
function a27dim() { return String(a27p('Settings.ApexPalette.Key') || '') === 'dim'; }
function a27color(value) {
    if (!a27dim() || typeof value !== 'string' || !/^#[0-9a-f]{8}$/i.test(value)) return value;
    var result = value.substr(0, 3);
    for (var i = 3; i < 9; i += 2) {
        var channel = Math.round(parseInt(value.substr(i, 2), 16) * 0.70).toString(16).toUpperCase();
        result += channel.length < 2 ? '0' + channel : channel;
    }
    return result;
}

// ABS intervention only: never infer activation from an ABS level/assist setting.
// Source labels distinguish intervention telemetry from pressure-based estimates.
function a27absBoolean(value) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0) return false;
  if (typeof value !== 'string') return null;
  var text = value.toLowerCase().replace(/^\s+|\s+$/g, '');
  return text === 'true' || text === '1' ? true : text === 'false' || text === '0' ? false : null;
}
function a27absResult(active, source) {
  return {active:active, source:active === null ? 'none' : source};
}
function a27absPositive(property) {
  var value = a27n(property);
  return value === null || value < 0 ? null : value > 0;
}
function a27abs() {
  if (!a27driving()) return a27absResult(null, 'none');
  var game = a27game(), active = null, source = 'telemetry', value, filtered, brake, raw;
  if (a27ir()) {
    active = a27absBoolean(a27p('GameRawData.Telemetry.BrakeABSactive'));
  } else if (game === 'assettocorsa') {
    // Physics.Abs in original AC is the setting, not intervention.
    active = a27absBoolean(a27p('GameRawData.Extensions.UDPIsAbsInAction'));
  } else if (game === 'assettocorsacompetizione' || game === 'assettocorsarally') {
    active = a27absPositive('GameRawData.Physics.Abs');
  } else if (game === 'assettocorsaevo') {
    active = a27absPositive('GameRawData.Physics.abs');
  } else if (game === 'lmu' || game === 'lemansultimate') {
    // SimHub combines LMU's oversensitive native bit with its configurable
    // pressure detection. Keep that filter.
    value = a27absBoolean(a27p('GameRawData.PlayerNativeTelemetry.mABSActive'));
    if (value !== null) {
      active = a27absBoolean(a27d('ABSActive'));
      if (active !== null) active = value && active;
    }
    source = 'estimated';
  } else if (game === 'automobilista2') {
    value = a27n('GameRawData.mCarFlags');
    if (value !== null && value >= 0 && value <= 4294967295 && Math.floor(value) === value) active = (value & 16) !== 0;
    // The exporter may expose the enum by name. Accept named flags, never
    // coerce a negative/empty sentinel into the common false default.
    else {
      raw = a27p('GameRawData.mCarFlags');
      if (raw !== null && /^CAR_[A-Z_]+(?:,\s*CAR_[A-Z_]+)*$/.test(String(raw))) active = /(^|,\s*)CAR_ABS(,|$)/.test(String(raw));
    }
  } else if (a27gt()) {
    // Only the newer GT7 packet carries both signals. Older GT7/GT Sport
    // adapters inherit the common false default, which is not evidence.
    filtered = a27n('GameRawData.brakeFiltered'); brake = a27n('GameRawData.Brake');
    if (filtered !== null && brake !== null && filtered >= 0 && brake >= 0) active = filtered < brake;
    source = 'estimated';
  } else if (game === 'rfactor2') {
    // SimHub derives this from brake-pressure modulation, not an ABS bit.
    active = a27absBoolean(a27d('ABSActive')); source = 'estimated';
  } else if (a27wrc()) {
    active = a27absBoolean(a27p('GameRawData.SessionUpdate.vehicle_cluster_abs'));
  }
  // F1 and other adapters remain unknown even when the common
  // NewData.ABSActive property exists and happens to contain false.
  return a27absResult(active, source);
}
function a27absActive() { return a27abs().active === true; }
function a27absKnown() { return a27abs().active !== null; }

// The original pedal graph uses native SimHub pedal properties and buffers.
function a27pedalPanel() { return a27p('Settings.ApexLowerRight.Key') !== 'car'; }
function a27absBadge() {
    var value = a27abs();
    return value.active === null ? 'ABS —' : value.source === 'estimated' ? 'ABS ≈' : 'ABS';
}
function a27absBadgeFill() { return a27absActive() ? '#FFFFB35C' : '#FF15202A'; }
function a27absBadgeInk() { return a27absActive() ? '#FF080C10' : '#FF96A6B4'; }

var H2_TIMING_LABELS={"ru":{"fuelRange":"ЗАПАС, КРУГИ","toLine":"До линии: ","pedals":"ПЕДАЛИ","sectorLiveDelta":"Δ к лучшему сектору сессии","currentSector":"ТЕКУЩИЙ СЕКТОР","lastSector":"ПОСЛЕДНИЙ СЕКТОР","sectorReference":"Δ к лучшему сектору сессии","sectorUnavailable":"Секторы не передаются","sectorShort":"СЕКТОР","progressShort":"ПРОГРЕСС","tyresShort":"ШИНЫ","allTimeBest":"ЛУЧШИЙ ЗА ВСЁ ВРЕМЯ","sessionBest":"ЛУЧШИЙ В СЕССИИ","sectorLearning":"Δ по сессии · запись эталона"},"en":{"fuelRange":"RANGE, LAPS","toLine":"To timing line: ","pedals":"PEDALS","sectorLiveDelta":"Δ vs session-best sector","currentSector":"CURRENT SECTOR","lastSector":"LAST SECTOR","sectorReference":"Δ vs session-best sector","sectorUnavailable":"Sector data unavailable","sectorShort":"SECTOR","progressShort":"PROGRESS","tyresShort":"TYRES","allTimeBest":"ALL-TIME BEST","sessionBest":"SESSION BEST","sectorLearning":"Δ vs session best · recording reference"},"de":{"fuelRange":"REICHWEITE, RD.","toLine":"Bis zur Zeitlinie: ","pedals":"PEDALE","sectorLiveDelta":"Δ zum besten Sektor der Session","currentSector":"AKTUELLER SEKTOR","lastSector":"LETZTER SEKTOR","sectorReference":"Δ zum besten Sektor der Session","sectorUnavailable":"Keine Sektordaten","sectorShort":"SEKTOR","progressShort":"FORTSCHRITT","tyresShort":"REIFEN","allTimeBest":"PERSÖNLICHE BESTZEIT","sessionBest":"SESSION-BESTZEIT","sectorLearning":"Δ zur Session-Bestzeit · Referenzaufzeichnung"},"es":{"fuelRange":"AUTONOMÍA, VUEL.","toLine":"Hasta la línea: ","pedals":"PEDALES","sectorLiveDelta":"Δ al mejor sector de la sesión","currentSector":"SECTOR ACTUAL","lastSector":"ÚLTIMO SECTOR","sectorReference":"Δ al mejor sector de la sesión","sectorUnavailable":"Sin datos de sectores","sectorShort":"SECTOR","progressShort":"AVANCE","tyresShort":"NEUMÁTICOS","allTimeBest":"MEJOR HISTÓRICO","sessionBest":"MEJOR DE LA SESIÓN","sectorLearning":"Δ de sesión · grabando referencia"},"fr":{"fuelRange":"AUTONOMIE, TOURS","toLine":"Jusqu’à la ligne: ","pedals":"PÉDALES","sectorLiveDelta":"Δ au meilleur secteur de la session","currentSector":"SECTEUR ACTUEL","lastSector":"DERNIER SECTEUR","sectorReference":"Δ au meilleur secteur de la session","sectorUnavailable":"Données de secteurs indisponibles","sectorShort":"SECTEUR","progressShort":"PROGRESSION","tyresShort":"PNEUS","allTimeBest":"RECORD PERSONNEL","sessionBest":"MEILLEUR DE LA SESSION","sectorLearning":"Δ de session · référence en cours"},"it":{"fuelRange":"AUTONOMIA, GIRI","toLine":"Alla linea: ","pedals":"PEDALI","sectorLiveDelta":"Δ al miglior settore della sessione","currentSector":"SETTORE ATTUALE","lastSector":"ULTIMO SETTORE","sectorReference":"Δ al miglior settore della sessione","sectorUnavailable":"Dati settori non disponibili","sectorShort":"SETTORE","progressShort":"AVANZAMENTO","tyresShort":"PNEUMATICI","allTimeBest":"MIGLIORE DI SEMPRE","sessionBest":"MIGLIORE SESSIONE","sectorLearning":"Δ sessione · registrazione riferimento"},"pt-BR":{"fuelRange":"AUTONOMIA, VOLTAS","toLine":"Até a linha: ","pedals":"PEDAIS","sectorLiveDelta":"Δ para o melhor setor da sessão","currentSector":"SETOR ATUAL","lastSector":"ÚLTIMO SETOR","sectorReference":"Δ para o melhor setor da sessão","sectorUnavailable":"Dados de setores indisponíveis","sectorShort":"SETOR","progressShort":"PROGRESSO","tyresShort":"PNEUS","allTimeBest":"MELHOR DE TODOS OS TEMPOS","sessionBest":"MELHOR DA SESSÃO","sectorLearning":"Δ da sessão · gravando referência"},"pl":{"fuelRange":"ZASIĘG, OKR.","toLine":"Do linii: ","pedals":"PEDAŁY","sectorLiveDelta":"Δ do najlepszego sektora sesji","currentSector":"BIEŻĄCY SEKTOR","lastSector":"OSTATNI SEKTOR","sectorReference":"Δ do najlepszego sektora sesji","sectorUnavailable":"Brak danych sektorów","sectorShort":"SEKTOR","progressShort":"POSTĘP","tyresShort":"OPONY","allTimeBest":"REKORD OSOBISTY","sessionBest":"NAJLEPSZY W SESJI","sectorLearning":"Δ w sesji · zapis odniesienia"},"cs":{"fuelRange":"DOJEZD, KOLA","toLine":"K časoměrné čáře: ","pedals":"PEDÁLY","sectorLiveDelta":"Δ k nejlepšímu sektoru relace","currentSector":"AKTUÁLNÍ SEKTOR","lastSector":"POSLEDNÍ SEKTOR","sectorReference":"Δ k nejlepšímu sektoru relace","sectorUnavailable":"Data sektorů nejsou dostupná","sectorShort":"SEKTOR","progressShort":"POSTUP","tyresShort":"PNEUMATIKY","allTimeBest":"OSOBNÍ REKORD","sessionBest":"NEJLEPŠÍ V RELACI","sectorLearning":"Δ v relaci · záznam reference"},"tr":{"fuelRange":"MENZİL, TUR","toLine":"Zaman çizgisine: ","pedals":"PEDALLAR","sectorLiveDelta":"Δ seansın en iyi sektörüne göre","currentSector":"MEVCUT SEKTÖR","lastSector":"SON SEKTÖR","sectorReference":"Δ seansın en iyi sektörüne göre","sectorUnavailable":"Sektör verisi yok","sectorShort":"SEKTÖR","progressShort":"İLERLEME","tyresShort":"LASTİKLER","allTimeBest":"TÜM ZAMANLARIN EN İYİSİ","sessionBest":"SEANSIN EN İYİSİ","sectorLearning":"Δ seans · referans kaydediliyor"},"ja":{"fuelRange":"航続周回数","toLine":"計測ラインまで: ","pedals":"ペダル","sectorLiveDelta":"Δ セッション最速セクターとの差","currentSector":"現在のセクター","lastSector":"直前のセクター","sectorReference":"Δ セッション最速セクターとの差","sectorUnavailable":"セクターデータなし","sectorShort":"セクター","progressShort":"進行","tyresShort":"タイヤ","allTimeBest":"自己ベスト","sessionBest":"セッションベスト","sectorLearning":"Δ セッション · 基準を記録中"},"ko":{"fuelRange":"주행 가능 랩","toLine":"계측선까지: ","pedals":"페달","sectorLiveDelta":"Δ 세션 최고 섹터 대비","currentSector":"현재 섹터","lastSector":"직전 섹터","sectorReference":"Δ 세션 최고 섹터 대비","sectorUnavailable":"섹터 데이터 없음","sectorShort":"섹터","progressShort":"진행률","tyresShort":"타이어","allTimeBest":"개인 최고 기록","sessionBest":"세션 최고 기록","sectorLearning":"Δ 세션 · 기준 기록 중"},"zh":{"fuelRange":"可跑圈数","toLine":"距计时线: ","pedals":"踏板","sectorLiveDelta":"Δ 对比本节最佳赛段","currentSector":"当前分段","lastSector":"上一分段","sectorReference":"Δ 对比本节最佳赛段","sectorUnavailable":"无分段数据","sectorShort":"分段","progressShort":"进度","tyresShort":"轮胎","allTimeBest":"历史最佳","sessionBest":"本节最佳","sectorLearning":"Δ 本节 · 正在记录参考"}};
// Lap and sector timing. Normalized SimHub sector times are durations, not cumulative splits.
function h2t(key) {
  var catalog=H2_TIMING_LABELS[a27lang()]||H2_TIMING_LABELS.en;
  return catalog[key]||H2_TIMING_LABELS.en[key]||'';
}
function h2timingMode() { return a27live()&&!a27race()&&!a27stage(); }
function h2positiveTime(name) { var s=a27seconds(a27d(name));return s!==null&&isFinite(s)&&s>0&&s<864000?s:null; }
function h2sectorCheckpoint(index) {
  if(index===0)return 0;
  // SectorDetails is a DoNotExpose CLR collection: $prop cannot return it.
  // The native function reads that collection directly; true is cumulative.
  try {
    var seconds=a27seconds(currentlapgetsectortime(index,true));
    if(seconds!==null&&isFinite(seconds)&&seconds>0&&seconds<864000)return seconds;
  }catch(e){}
  return null;
}
function h2sectorData() {
  var result={available:false,current:null,currentTime:null,last:null,lastTime:null,reference:null,delta:null};
  if(!a27live()||a27stage())return result;
  var index=a27dn('CurrentSectorIndex'),count=a27dn('SectorsCount');
  // SectorsCount has a default of 3 even in games without sector telemetry.
  if(index===null||index<1||index>100||Math.floor(index)!==index)return result;
  if(count===null||count<index||count>100||Math.floor(count)!==count)count=null;
  result.available=true;result.current=index;
  var lapTime=a27seconds(a27d('CurrentLapTime')),s1=h2positiveTime('Sector1Time'),s2=h2positiveTime('Sector2Time');
  if(lapTime!==null&&(!isFinite(lapTime)||lapTime<0||lapTime>=864000))lapTime=null;
  var start=index===1?0:index===2?s1:index===3&&s1!==null&&s2!==null?s1+s2:null;
  if(start===null)start=h2sectorCheckpoint(index-1);
  if(a27driving()&&lapTime!==null&&start!==null&&lapTime>=start)result.currentTime=lapTime-start;
  // LastSectorTime and LastSectorTimeAnyLap do not reliably identify the most
  // recently completed sector in this SimHub version. Use numbered splits.
  if(index===2){result.last=1;result.lastTime=s1;}
  else if(index===3){result.last=2;result.lastTime=s2;}
  else if(index===1&&count!==null&&a27dn('CurrentLap')>1&&h2positiveTime('LastLapTime')!==null){
    result.last=count;result.lastTime=count<=3?h2positiveTime('Sector'+count+'LastLapTime'):null;
    if(result.lastTime===null)try {var previous=a27seconds(lastlapgetsectortime(count,false));if(previous!==null&&previous>0)result.lastTime=previous;}catch(e){}
  }
  if(index>1&&result.lastTime===null){
    result.last=index-1;
    var end=h2sectorCheckpoint(index-1),begin=h2sectorCheckpoint(index-2);
    if(end!==null&&begin!==null&&end>begin)result.lastTime=end-begin;
  }
  if(result.last!==null)result.reference=h2bestSector(result.last);
  if(!a27invalid()&&result.lastTime!==null&&result.reference!==null)result.delta=result.lastTime-result.reference;
  return result;
}
function h2sectorTime(current) {
  var s=h2sectorData(),time=current?s.currentTime:s.lastTime;
  return time===null?'—':time===0?'0:00.000':a27time({TotalSeconds:time},true);
}
function h2sectorLabel(current) {
  var s=h2sectorData(),index=current?s.current:s.last;
  return h2t(current?'currentSector':'lastSector')+(index===null?'':' '+index);
}
function h2sectorDelta() { return a27signed(h2sectorData().delta,3); }
function h2sectorDeltaColor() { var v=h2sectorData().delta;return v===null?'#FF96A6B4':v<=0?'#FF64E3B1':'#FFFFB35C'; }

// Keep prediction, reference and delta on one native timing source.
function h2timingSpan(name) {
  var v=a27seconds(a27p('PersistantTrackerPlugin.'+name));
  return v!==null&&v>0&&v<864000?v:null;
}
function h2timingPair(source,kind,reference,delta,prediction) {
  if(reference===null||delta===null||prediction===null||!isFinite(delta)||Math.abs(delta)>864000||prediction<=0||Math.abs(reference+delta-prediction)>0.025)return null;
  return {seconds:reference,delta:delta,prediction:prediction,session:kind==='session',kind:kind,source:source};
}
function h2lapTiming() {
  var empty={seconds:null,delta:null,prediction:null,session:false,kind:'none',source:'none'};
  if(!a27live()||a27stage()||!a27knownTrack())return empty;
  var pair=null,best=h2positiveTime('BestLapTime'),reference,delta,prediction;
  // iRacing's normalized delta may fall back to optimal while retaining a
  // session-best label. Require its own validity flag for this native pair.
  if(a27ir()&&a27yes(a27p('GameRawData.Telemetry.LapDeltaToSessionBestLap_OK'))){
    reference=a27n('GameRawData.Telemetry.LapBestLapTime');delta=a27n('GameRawData.Telemetry.LapDeltaToSessionBestLap');
    if(reference!==null&&reference>0&&reference<864000&&delta!==null)pair=h2timingPair('iracing-session','session',reference,delta,reference+delta);
  }
  // For other adapters use the exported normal pair only while native delta
  // is present, so the tracker cannot silently substitute an all-time lap.
  if(!pair&&!a27ir()&&a27dn('DeltaToSessionBest')!==null){
    reference=h2timingSpan('SessionBest');delta=a27n('PersistantTrackerPlugin.SessionBestLiveDeltaSeconds');prediction=h2timingSpan('EstimatedLapTime_SessionBestBased');
    if(best!==null&&reference!==null&&Math.abs(best-reference)<0.002)pair=h2timingPair('native-session','session',reference,delta,prediction);
  }
  if(!pair){
    reference=h2timingSpan('EstimatedLapTime_SessionBestBasedSimhub_ReferenceLapTime');delta=a27n('PersistantTrackerPlugin.EstimatedLapTime_SessionBestBasedSimhub_EstimatedDelta');prediction=h2timingSpan('EstimatedLapTime_SessionBestBasedSimhub');
    pair=h2timingPair('simhub-record','tracker',reference,delta,prediction);
  }
  if(!pair){
    reference=h2timingSpan('AllTimeBest');delta=a27n('PersistantTrackerPlugin.AllTimeBestLiveDeltaSeconds');prediction=h2timingSpan('EstimatedLapTime_AllTimeBestBased');
    pair=h2timingPair('all-time-record','personal',reference,delta,prediction);
  }
  if(!pair){
    var personal=a27seconds(a27personal());
    empty.seconds=best!==null?best:personal>0?personal:null;empty.session=best!==null;empty.kind=best!==null?'session':empty.seconds!==null?'personal':'none';
    return empty;
  }
  if(!a27driving()||a27pit()||a27invalid()||a27progress()===null){pair.delta=null;pair.prediction=null;}
  return pair;
}
function a27reference() { return h2lapTiming(); }
function a27delta() { return h2lapTiming().delta; }
function a27prediction() { var value=h2lapTiming().prediction;return value===null?'—':a27time({TotalSeconds:value},true); }

function h2lapComparison(kind) {
  var value={seconds:null,delta:null,prediction:null};
  if(!a27live()||a27stage()||!a27knownTrack())return value;
  if(kind==='session') {
    value.seconds=h2positiveTime('BestLapTime');
    var session=h2lapTiming();
    if(session.kind==='session')value=session;
  }else {
    value.seconds=h2timingSpan('AllTimeBest');
    var pair=h2timingPair('all-time-record','personal',value.seconds,
      a27n('PersistantTrackerPlugin.AllTimeBestLiveDeltaSeconds'),h2timingSpan('EstimatedLapTime_AllTimeBestBased'));
    if(pair)value=pair;
  }
  if(!a27driving()||a27pit()||a27invalid()||a27progress()===null){value.delta=null;value.prediction=null;}
  return value;
}
function h2lapReferenceText(kind) { var v=h2lapComparison(kind).seconds;return v===null?'—':a27time({TotalSeconds:v},true); }
function h2lapDeltaText(kind) { return a27signed(h2lapComparison(kind).delta,3); }
function h2deltaColor(v) { return v===null?'#FF96A6B4':v<=0?'#FF64E3B1':'#FFFFB35C'; }
function h2lapDeltaColor(kind) { return h2deltaColor(h2lapComparison(kind).delta); }
function h2bestSector(index) {
  // Independent fastest sectors from valid laps in this session, not the
  // sector splits belonging to a single fastest complete lap.
  try { var v=a27seconds(bestsectortime(index,false));if(v!==null&&v>0&&v<864000)return v; }catch(e){}
  return index<=3?h2positiveTime('Sector'+index+'BestTime'):null;
}
function h2sectorSessionKey() {
  return [a27game(),a27d('TrackIdWithConfig'),a27d('TrackCode'),a27d('TrackName'),a27d('CarId'),a27d('CarModel'),
    a27p('DataCorePlugin.GameData.SessionId'),a27d('SessionTypeName'),a27p('GameRawData.Telemetry.SessionNum'),
    a27p('GameRawData.StaticInfo.session_id'),a27p('GameRawData.StaticInfo.event_id')].join('|');
}
function h2traceAt(trace,value,axis) {
  if(!trace||trace.length<2||value<trace[0][axis]||value>trace[trace.length-1][axis])return null;
  var lo=0,hi=trace.length-1;
  while(hi-lo>1){var mid=Math.floor((lo+hi)/2);if(trace[mid][axis]<=value)lo=mid;else hi=mid;}
  var a=trace[lo],b=trace[hi],width=b[axis]-a[axis];
  return width>0?a[1-axis]+(b[1-axis]-a[1-axis])*(value-a[axis])/width:null;
}
function h2sectorTraceState(s) {
  if(typeof A27_STATE==='undefined'||!A27_STATE)return null;
  var key=h2sectorSessionKey(),clock=a27seconds(a27d('CurrentLapTime')),lap=a27dn('CurrentLap'),p=a27progress(),now=Date.now();
  var restart=a27yes(a27d('IsSessionRestart')),state=A27_STATE.h2sectorSession;
  if(!state||state.key!==key||(restart&&!state.restart)||(state.previous&&lap<state.previous.lap))
    state=A27_STATE.h2sectorSession={key:key,records:{},previous:null,trace:[],ends:{},complete:false};
  state.restart=restart;
  if(!a27driving()||a27stage()||!s.available||clock===null||clock<0||p===null||lap===null||lap<1){state.previous=null;state.complete=false;return state;}
  var previous=state.previous,count=a27dn('SectorsCount'),valid=!a27pit()&&!a27invalid();
  var sample={lap:lap,clock:clock,p:p,index:s.current,count:count,stamp:now,valid:valid};
  var close=previous&&now>=previous.stamp&&now-previous.stamp<=1500;
  var wrap=close&&lap===previous.lap+1&&s.current===1&&previous.index===previous.count&&clock<=1.5;
  if(wrap&&valid&&previous.valid) {
    var last=h2positiveTime('LastLapTime');
    if(state.complete&&last!==null&&last>=previous.clock&&last-previous.clock+clock<=1.5&&previous.p>0.95) {
      state.trace.push([1,last]);state.ends[previous.count]=last;
      var start=0;
      for(var index=1;index<=previous.count;index++) {
        var end=state.ends[index],beginPos=start===0?0:h2traceAt(state.trace,start,1),endPos=h2traceAt(state.trace,end,1);
        if(typeof end!=='number'||end<=start||beginPos===null||endPos===null||endPos<=beginPos)break;
        var duration=end-start,old=state.records[index];
        if(!old||duration<old.seconds) {
          var trace=[[beginPos,0]];
          for(var j=0;j<state.trace.length;j++){var point=state.trace[j];if(point[1]>start&&point[1]<end)trace.push([point[0],point[1]-start]);}
          trace.push([endPos,duration]);state.records[index]={seconds:duration,trace:trace};
        }
        start=end;
      }
    }
  }
  var continuous=close&&lap===previous.lap&&clock>=previous.clock&&clock-previous.clock<=1.5&&p>=previous.p&&s.current>=previous.index&&s.current<=previous.index+1;
  if(!continuous) {
    state.trace=[];state.ends={};state.complete=valid&&s.current===1&&p<0.01&&((!previous&&clock<=0.25)||wrap);
    if(state.complete)state.trace.push([0,0]);
  }
  if(!valid)state.complete=false;
  for(var n=1;n<s.current;n++){var checkpoint=h2sectorCheckpoint(n);if(n===1)checkpoint=h2positiveTime('Sector1Time')||checkpoint;if(checkpoint!==null&&checkpoint>0&&checkpoint<=clock)state.ends[n]=checkpoint;}
  if(s.current===3){var one=h2positiveTime('Sector1Time'),two=h2positiveTime('Sector2Time');if(one!==null&&two!==null)state.ends[2]=one+two;}
  if(state.complete&&state.trace.length<100000) {
    var tail=state.trace[state.trace.length-1];
    if(clock-tail[1]>=0.1&&p>tail[0])state.trace.push([p,clock]);
  }else if(state.trace.length>=100000)state.complete=false;
  state.previous=sample;return state;
}
function h2sectorLiveDelta() {
  var s=h2sectorData(),state=h2sectorTraceState(s);
  if(!state||!a27driving()||a27pit()||a27invalid()||s.currentTime===null)return null;
  var record=state.records[s.current],best=h2bestSector(s.current),p=a27progress();
  // A faster sector set before this dashboard was opened has no recorded
  // trace here. Never silently compare it against a different, slower lap.
  if(!record||best===null||Math.abs(record.seconds-best)>0.005||p===null)return null;
  var reference=h2traceAt(record.trace,p,0);
  return reference===null?null:s.currentTime-reference;
}
function h2sectorLiveDeltaText() { var v=h2sectorLiveDelta();return v===null?'—':'≈'+a27signed(v,3); }
function h2sectorLiveDeltaColor() { return h2deltaColor(h2sectorLiveDelta()); }
function h2sectorReferenceNote(current) {
  return current&&h2sectorLiveDelta()===null&&!a27invalid()?h2t('sectorLearning'):h2t('sectorReference');
}
function h2footerTime() {
  var now=new Date(),clock=('0'+now.getHours()).slice(-2)+':'+('0'+now.getMinutes()).slice(-2);
  if(!a27live())return clock;
  var seconds=a27seconds(a27d('SessionTimeLeft')),key=h2sectorSessionKey();
  if(typeof A27_STATE!=='undefined'&&A27_STATE) {
    if(A27_STATE.h2timerKey!==key){A27_STATE.h2timerKey=key;A27_STATE.h2timerSeen=false;}
    if(seconds>0&&seconds<864000)A27_STATE.h2timerSeen=true;
  }
  var remaining='—';
  if(seconds!==null&&seconds>=0&&seconds<864000&&(seconds>0||(typeof A27_STATE!=='undefined'&&A27_STATE.h2timerSeen))) {
    var t=Math.ceil(seconds),h=Math.floor(t/3600),m=Math.floor(t%3600/60),s=t%60;
    remaining=(h>0?h+':'+('0'+m).slice(-2):String(m))+':'+('0'+s).slice(-2);
  }
  return clock+'   ·   '+a27session()+'  '+remaining;
}
function a27unit() {
  if(a27f1())return a27t(225);
  var u=a27str(a27d('FuelUnit'),'L');
  return /^(l|liters?|litres?)$/i.test(u)?'L':/^(gal|gallons?)$/i.test(u)?'gal':u;
}


var H2_RACE_LABELS={"ru":{"title":"УЧАСТНИКИ","driver":"ПИЛОТ","gap":"ОТРЫВ","lobby":"ВСЕГО","ownClass":"СВОЙ КЛАСС","meanIr":"СР. iR","pinnedAhead":"КЛАСС: ВПЕРЕДИ","pinnedBehind":"КЛАСС: ПОЗАДИ","physicalAhead":"НА ТРАССЕ ВПЕРЕДИ","physicalBehind":"НА ТРАССЕ ПОЗАДИ","player":"ВЫ","pinnedNote":"Крайние строки — ближайшие позиции своего класса","trafficNote":"впереди на трассе · − позади на трассе","lastLap":"ПОСЛ. КРУГ","raceGap":"ЗАЧЁТ","trackGap":"НА ТРАССЕ","classificationOnlyNote":"Гоночные позиции · интервалы на трассе недоступны"},"en":{"title":"DRIVERS","driver":"DRIVER","gap":"GAP","lobby":"TOTAL","ownClass":"YOUR CLASS","meanIr":"AVG iR","pinnedAhead":"CLASS: AHEAD","pinnedBehind":"CLASS: BEHIND","physicalAhead":"AHEAD ON TRACK","physicalBehind":"BEHIND ON TRACK","player":"YOU","pinnedNote":"Outer rows: nearest positions in your class","trafficNote":"ahead on track · − behind on track","lastLap":"LAST LAP","raceGap":"RACE","trackGap":"TRACK","classificationOnlyNote":"Race positions · track intervals unavailable"},"de":{"title":"FAHRER","driver":"FAHRER","gap":"ABSTAND","lobby":"GESAMT","ownClass":"EIGENE KLASSE","meanIr":"Ø iR","pinnedAhead":"KLASSE: DAVOR","pinnedBehind":"KLASSE: DAHINTER","physicalAhead":"AUF DER STRECKE DAVOR","physicalBehind":"AUF DER STRECKE DAHINTER","player":"DU","pinnedNote":"Äußere Zeilen: nächste Positionen in deiner Klasse","trafficNote":"auf der Strecke davor · − auf der Strecke dahinter","lastLap":"LETZTE RUNDE","raceGap":"RENNEN","trackGap":"STRECKE","classificationOnlyNote":"Rennpositionen · Streckenabstände nicht verfügbar"},"es":{"title":"PILOTOS","driver":"PILOTO","gap":"DIF.","lobby":"TOTAL","ownClass":"TU CLASE","meanIr":"iR MEDIO","pinnedAhead":"CLASE: DELANTE","pinnedBehind":"CLASE: DETRÁS","physicalAhead":"DELANTE EN PISTA","physicalBehind":"DETRÁS EN PISTA","player":"TÚ","pinnedNote":"Filas exteriores: posiciones más cercanas de tu clase","trafficNote":"delante en pista · − detrás en pista","lastLap":"ÚLT. VUELTA","raceGap":"CARRERA","trackGap":"PISTA","classificationOnlyNote":"Posiciones de carrera · intervalos en pista no disponibles"},"fr":{"title":"PILOTES","driver":"PILOTE","gap":"ÉCART","lobby":"TOTAL","ownClass":"VOTRE CATÉGORIE","meanIr":"iR MOYEN","pinnedAhead":"CATÉGORIE : DEVANT","pinnedBehind":"CATÉGORIE : DERRIÈRE","physicalAhead":"DEVANT EN PISTE","physicalBehind":"DERRIÈRE EN PISTE","player":"VOUS","pinnedNote":"Lignes extérieures : positions voisines de votre catégorie","trafficNote":"devant en piste · − derrière en piste","lastLap":"DERNIER TOUR","raceGap":"COURSE","trackGap":"PISTE","classificationOnlyNote":"Positions de course · écarts sur la piste indisponibles"},"it":{"title":"PILOTI","driver":"PILOTA","gap":"DISTACCO","lobby":"TOTALE","ownClass":"TUA CLASSE","meanIr":"iR MEDIO","pinnedAhead":"CLASSE: DAVANTI","pinnedBehind":"CLASSE: DIETRO","physicalAhead":"DAVANTI IN PISTA","physicalBehind":"DIETRO IN PISTA","player":"TU","pinnedNote":"Righe esterne: posizioni più vicine nella tua classe","trafficNote":"davanti in pista · − dietro in pista","lastLap":"ULTIMO GIRO","raceGap":"GARA","trackGap":"PISTA","classificationOnlyNote":"Posizioni di gara · distacchi in pista non disponibili"},"pt-BR":{"title":"PILOTOS","driver":"PILOTO","gap":"DIF.","lobby":"TOTAL","ownClass":"SUA CLASSE","meanIr":"iR MÉDIO","pinnedAhead":"CLASSE: À FRENTE","pinnedBehind":"CLASSE: ATRÁS","physicalAhead":"À FRENTE NA PISTA","physicalBehind":"ATRÁS NA PISTA","player":"VOCÊ","pinnedNote":"Linhas externas: posições mais próximas na sua classe","trafficNote":"à frente na pista · − atrás na pista","lastLap":"ÚLT. VOLTA","raceGap":"CORRIDA","trackGap":"PISTA","classificationOnlyNote":"Posições de corrida · intervalos na pista indisponíveis"},"pl":{"title":"KIEROWCY","driver":"KIEROWCA","gap":"RÓŻNICA","lobby":"ŁĄCZNIE","ownClass":"TWOJA KLASA","meanIr":"ŚR. iR","pinnedAhead":"KLASA: PRZED","pinnedBehind":"KLASA: ZA","physicalAhead":"PRZED TOBĄ NA TORZE","physicalBehind":"ZA TOBĄ NA TORZE","player":"TY","pinnedNote":"Skrajne wiersze: sąsiednie pozycje w twojej klasie","trafficNote":"przed tobą na torze · − za tobą na torze","lastLap":"OST. OKRĄŻENIE","raceGap":"WYŚCIG","trackGap":"TOR","classificationOnlyNote":"Pozycje w wyścigu · odstępy na torze niedostępne"},"cs":{"title":"JEZDCI","driver":"JEZDEC","gap":"ODSTUP","lobby":"CELKEM","ownClass":"VAŠE TŘÍDA","meanIr":"PRŮM. iR","pinnedAhead":"TŘÍDA: VPŘEDU","pinnedBehind":"TŘÍDA: VZADU","physicalAhead":"VPŘEDU NA TRATI","physicalBehind":"VZADU NA TRATI","player":"VY","pinnedNote":"Krajní řádky: sousední pozice ve vaší třídě","trafficNote":"vpředu na trati · − vzadu na trati","lastLap":"POSLEDNÍ KOLO","raceGap":"ZÁVOD","trackGap":"TRAŤ","classificationOnlyNote":"Pořadí v závodě · rozestupy na trati nejsou dostupné"},"tr":{"title":"SÜRÜCÜLER","driver":"SÜRÜCÜ","gap":"FARK","lobby":"TOPLAM","ownClass":"SINIFINIZ","meanIr":"ORT. iR","pinnedAhead":"SINIF: ÖNDE","pinnedBehind":"SINIF: ARKADA","physicalAhead":"PİSTTE ÖNDE","physicalBehind":"PİSTTE ARKADA","player":"SİZ","pinnedNote":"Dış satırlar: sınıfınızdaki en yakın sıralamalar","trafficNote":"pistte önde · − pistte arkada","lastLap":"SON TUR","raceGap":"YARIŞ","trackGap":"PİST","classificationOnlyNote":"Yarış sıralaması · pistteki aralıklar kullanılamıyor"},"ja":{"title":"ドライバー","driver":"ドライバー","gap":"差","lobby":"合計","ownClass":"自分のクラス","meanIr":"平均 iR","pinnedAhead":"クラス順位：前","pinnedBehind":"クラス順位：後","physicalAhead":"コース上で前方","physicalBehind":"コース上で後方","player":"自分","pinnedNote":"上下端の行：同じクラスで直前・直後の順位","trafficNote":"コース上で前方 · − コース上で後方","lastLap":"前のラップ","raceGap":"レース","trackGap":"コース上","classificationOnlyNote":"レース順位 · コース上の間隔は取得できません"},"ko":{"title":"드라이버","driver":"드라이버","gap":"격차","lobby":"전체","ownClass":"내 클래스","meanIr":"평균 iR","pinnedAhead":"클래스 순위: 앞","pinnedBehind":"클래스 순위: 뒤","physicalAhead":"트랙에서 앞","physicalBehind":"트랙에서 뒤","player":"나","pinnedNote":"맨 위와 아래 행: 같은 클래스의 바로 앞뒤 순위","trafficNote":"트랙에서 앞 · − 트랙에서 뒤","lastLap":"이전 랩","raceGap":"레이스","trackGap":"트랙","classificationOnlyNote":"레이스 순위 · 트랙 간격 정보 없음"},"zh":{"title":"车手","driver":"车手","gap":"差距","lobby":"总人数","ownClass":"本组别","meanIr":"平均 iR","pinnedAhead":"组别排名：前方","pinnedBehind":"组别排名：后方","physicalAhead":"赛道前方","physicalBehind":"赛道后方","player":"你","pinnedNote":"首尾行：本组别中紧邻你的前后名次","trafficNote":"赛道前方 · − 赛道后方","lastLap":"上一圈","raceGap":"比赛","trackGap":"赛道","classificationOnlyNote":"比赛排名 · 赛道间隔数据不可用"}};
// Race rows use SimHub's current leaderboard indices, never stored indices.
// Class rivals follow race order; inner rows follow physical track proximity.
function h2raceT(key) {
  var catalogs=typeof H2_RACE_LABELS==='undefined'?{}:H2_RACE_LABELS;
  var catalog=catalogs[a27lang()]||catalogs.en||{};
  return catalog[key]||(catalogs.en||{})[key]||'';
}
function h2raceNumber(value) {
  if(value===null||value===undefined||typeof value==='boolean'||typeof value==='string'&&/^\s*$/.test(value))return null;
  var n=Number(value);return isFinite(n)?n:null;
}
function h2raceString(value) { return value===null||value===undefined?'':String(value).replace(/^\s+|\s+$/g,''); }
function h2raceRead(index,field) {
  try {
    if(field==='available')return driveravailable(index);
    if(field==='name')return drivername(index);
    if(field==='position')return driverposition(index);
    if(field==='classPosition')return driverclassposition(index);
    if(field==='className')return drivercarclass(index);
    if(field==='connected')return driverisconnected(index);
    if(field==='gap')return driverrelativegaptoplayer(index);
    if(field==='raceGap')return drivergaptoplayer(index);
    if(field==='laps')return driverlapstoplayer(index);
    if(field==='irating')return driveriracingirating(index);
    if(field==='licence')return driverlicencestring(index);
    if(field==='pit')return driveriscarinpitlane(index)||driveriscarinpit(index);
    if(field==='lastLap')return driverlastlap(index);
    if(field==='bestLap')return driverbestlap(index);
    if(field==='carNumber')return drivercarnumber(index);
  }catch(e){}
  return null;
}
function h2raceCount() { var n=h2raceNumber(a27dn('OpponentsCount'));return a27live()&&n!==null&&n>0?Math.min(512,Math.floor(n)):0; }
function h2raceRowsCount() { return a27largeTraffic()?5:a27p('Settings.ApexTrafficSize.Key')==='seven'?7:11; }
function h2racePositionOnly() { return a27game()==='f12017'; }
function h2raceValid(index) {
  var n=h2raceNumber(index);
  return n!==null&&n>=1&&n<=512&&n===Math.floor(n)&&h2raceRead(n,'available')===true;
}
function h2raceClassName(index) {
  var name=h2raceString(h2raceRead(index,'className'));
  return !name||/^(unknown|none|0|-)$/i.test(name)?'':name;
}
function h2raceClassList(player,count) {
  var list=[],seen={},limit=h2raceNumber(a27dn('PlayerClassOpponentsCount')),i,index;
  limit=limit!==null&&limit>0?Math.min(count,Math.floor(limit)):count;
  // This native mapping uses class membership, not a possibly shortened label.
  for(i=1;i<=limit;i++){
    try{index=getopponentleaderboardposition_playerclassonly(i);}catch(e){break;}
    if(h2raceValid(index)&&!seen[index]){list.push(Number(index));seen[index]=true;}
  }
  if(seen[player])return list;
  // Older/unsupported mapping: exact full class names only, never truncated names.
  list=[];var own=h2raceClassName(player);
  if(!own)return list;
  for(i=1;i<=count;i++)if(h2raceValid(i)&&h2raceClassName(i)===own)list.push(i);
  return list;
}
function h2raceClassIndex(ordinal) {
  if(!(ordinal>0))return null;
  try{var index=getopponentleaderboardposition_playerclassonly(ordinal);return h2raceValid(index)?Number(index):null;}catch(e){return null;}
}
function h2raceSameClass(index,plan) {
  if(a27ir()) {var raw=h2irRaw();return h2irClassId(index,raw)===h2irClassId(plan.player,raw);}
  if(!plan.multi||index===plan.player)return true;
  var ordinal=h2raceNumber(h2raceRead(index,'classPosition'));
  if(ordinal!==null&&ordinal>0&&ordinal===Math.floor(ordinal)){
    var mapped=h2raceClassIndex(ordinal);if(mapped!==null)return mapped===index;
  }
  for(var i=0;i<plan.classes.length;i++)if(plan.classes[i]===index)return true;
  var own=h2raceClassName(plan.player);return own!==''&&h2raceClassName(index)===own;
}
function h2racePlan() {
  var plan={slots:{},player:null,count:h2raceCount(),multi:false,classes:[],edge:(h2raceRowsCount()-1)/2};
  if(!a27live()||plan.count<1)return plan;
  try{plan.player=Number(getplayerleaderboardposition());}catch(e){}
  if(!h2raceValid(plan.player))return plan;
  plan.slots[0]=plan.player;
  // The F1 2017 adapter's lap fraction uses total distance as its divisor.
  // Race positions remain usable; physical order and calculated gaps do not.
  if(h2racePositionOnly()){
    var order=[],at=-1,k,position;
    for(k=1;k<=plan.count;k++)if(h2raceValid(k)){
      position=h2raceNumber(h2raceRead(k,'position'));
      if(position!==null&&position>0&&Math.floor(position)===position)order.push({index:k,position:position});
    }
    order.sort(function(a,b){return a.position-b.position||a.index-b.index;});
    for(k=0;k<order.length;k++)if(order[k].index===plan.player){at=k;break;}
    if(at>=0)for(k=-plan.edge;k<=plan.edge;k++)if(at+k>=0&&at+k<order.length)plan.slots[k]=order[at+k].index;
    return plan;
  }
  plan.multi=a27multi();
  var seen={},i,j,index,ordinal=-1,side,need,relative;
  seen[plan.player]=true;
  if(plan.multi){
    ordinal=h2raceNumber(h2raceRead(plan.player,'classPosition'));
    var before=null,after=null;
    // Normal path is O(1): verify the class ordinal belongs to the player.
    if(ordinal!==null&&ordinal>0&&ordinal===Math.floor(ordinal)&&h2raceClassIndex(ordinal)===plan.player){
      before=h2raceClassIndex(ordinal-1);after=h2raceClassIndex(ordinal+1);
    }else{
      plan.classes=h2raceClassList(plan.player,plan.count);ordinal=-1;
      for(i=0;i<plan.classes.length;i++)if(plan.classes[i]===plan.player){ordinal=i;break;}
      if(ordinal>0)before=plan.classes[ordinal-1];
      if(ordinal>=0&&ordinal+1<plan.classes.length)after=plan.classes[ordinal+1];
    }
    // Keep both reserved slots empty when no class rival exists at a boundary.
    if(before!==null&&!seen[before]){plan.slots[-plan.edge]=before;seen[before]=true;}
    if(after!==null&&!seen[after]){plan.slots[plan.edge]=after;seen[after]=true;}
  }
  need=plan.multi?plan.edge-1:plan.edge;
  for(j=0;j<2;j++){
    side=j===0?-1:1;relative=1;
    for(i=1;i<=plan.count&&relative<=need;i++){
      try{index=getopponentleaderboardposition_aheadbehind(side*i);}catch(e){break;}
      if(!(index>0))break;
      if(!h2raceValid(index)||seen[index])continue;
      if(a27ir()&&h2raceRead(index,'connected')===false)continue;
      index=Number(index);plan.slots[side*relative]=index;seen[index]=true;relative++;
    }
  }
  return plan;
}
function h2raceArrayLength(value) {
  if(!value||typeof value==='string')return 0;
  try{
    var n=h2raceNumber(value.length===undefined?(value.Length===undefined?value.Count:value.Length):value.length);
    return n!==null&&n>=0&&n<=512&&Math.floor(n)===n?n:0;
  }catch(e){return 0;}
}
function h2raceCarIndex(index,limit,roster) {
  // iRacing's normalized driverid is usually a name, not the SDK CarIdx.
  // CarNumber is copied directly from DriverInfo by the native adapter.
  var number=h2raceString(h2raceRead(index,'carNumber'));
  if(!number)return null;
  var length=h2raceArrayLength(roster),found=null;
  try{
    for(var i=0;i<length;i++){
      var driver=roster[i];if(!driver||h2raceString(driver.CarNumber)!==number)continue;
      if(a27active(driver.IsSpectator)||a27active(driver.CarIsPaceCar))continue;
      var car=h2raceNumber(driver.CarIdx);
      if(car===null||car<0||car>=limit||Math.floor(car)!==car)return null;
      // Ambiguous numbers are unavailable, even if one entry looks plausible.
      if(found!==null)return null;
      found=car;
    }
  }catch(e){return null;}
  return found;
}
function h2raceFlagData(row) {
  var result={available:false,id:'',text:'',color:'#00000000'};
  // SimHub 9.12.6 has no normalized individual Opponent flag properties.
  // Never substitute the player's or session-wide flag for another car.
  if(!row.available||!a27ir()||!a27driving()||row.connected!==true)return result;
  // Whole arrays are not registered by $prop. NewRawData is SimHub's native
  // raw-object API; keep the roster and per-car flags in the same snapshot.
  var raw,values,roster;
  try{
    raw=h2irRaw();
    if(!raw||!raw.Telemetry||!raw.SessionData||!raw.SessionData.DriverInfo)return result;
    values=h2irValue(raw,'CarIdxSessionFlags');roster=raw.SessionData.DriverInfo.Drivers;
  }catch(e){return result;}
  var length=h2raceArrayLength(values);
  if(!length)return result;
  var car=h2raceCarIndex(row.index,length,roster);if(car===null)return result;
  var mask;
  try{mask=h2raceNumber(values[car]);}catch(e){return result;}
  if(mask===null||Math.floor(mask)!==mask||mask<-2147483648||mask>4294967295||mask===-1||mask===4294967295)return result;
  mask=mask>>>0;result.available=true;
  var flags={red:(mask&16)!==0,dsq:(mask&131072)!==0,checkered:(mask&1)!==0,
    yellow:(mask&(8|256|16384|32768))!==0,debris:(mask&64)!==0,blue:(mask&32)!==0,
    black:(mask&65536)!==0,repair:(mask&1048576)!==0,white:(mask&2)!==0,green:(mask&4)!==0};
  // A yellow addresses this car/its zone; it does not identify a crashed car.
  for(var i=0;i<A27_FLAG_PRIORITY.length;i++)if(flags[A27_FLAG_PRIORITY[i]]){
    result.id=A27_FLAG_PRIORITY[i];result.text=a27flagShortName(result.id);result.color=a27flagColor(result.id);break;
  }
  return result;
}
function h2raceRow(slot,withFlags) {
  var plan=h2racePlan(),index=plan.slots[slot],pinned=!plan.overview&&plan.multi&&Math.abs(slot)===plan.edge;
  var row={available:false,index:null,slot:slot,kind:slot===0?'player':pinned?'class':'traffic',name:'',position:null,className:'',classPosition:null,gap:null,trackGap:null,raceGap:null,gapKind:slot===0?'player':pinned?'race':'track',gapNote:slot===0?'':h2raceT(pinned?'raceGap':'trackGap'),laps:null,irating:null,licence:'',sameClass:!plan.multi,connected:null,pit:false,lastLap:null,flag:'',flagText:'',flagColor:'#00000000',flagAvailable:false};
  if(!h2raceValid(index))return row;
  row.available=true;row.index=index;
  if(a27ir()) {
    row.towing=index===plan.player&&h2irTowing(h2irRaw());
    row.kind=index===plan.player?'player':plan.grid?'grid':plan.overview?'classification':pinned?'class':'traffic';
    row.gapKind=row.kind==='player'?'player':row.kind==='traffic'?'track':'race';
    row.gapNote=row.kind==='player'?'':h2raceT(plan.grid?'grid':row.gapKind==='race'?'raceGap':'trackGap');
  }
  row.name=h2raceString(h2raceRead(index,'name'));
  row.position=h2raceNumber(h2raceRead(index,'position'));
  row.className=h2raceClassName(index);
  row.classPosition=h2raceNumber(h2raceRead(index,'classPosition'));
  row.trackGap=plan.grid||h2racePositionOnly()?null:h2raceNumber(h2raceRead(index,'gap'));
  // Native race gap uses the timing to the race leader, not a circular interval.
  // A missing race gap must never silently become a physical relative gap.
  row.raceGap=plan.grid?null:h2raceNumber(h2raceRead(index,'raceGap'));
  row.gap=row.gapKind==='race'?row.raceGap:row.trackGap;
  row.gapEstimated=a27ir()&&row.gapKind==='race'&&row.gap!==null&&h2irUseRaceGapEstimate(h2irRaw(),h2irDriver(index,h2irRaw()));
  row.laps=plan.grid||h2racePositionOnly()?null:h2raceNumber(h2raceRead(index,'laps'));
  if(h2racePositionOnly()){row.gapKind=slot===0?'player':'race';row.gapNote=slot===0?'':h2raceT('raceGap');}
  row.connected=h2raceRead(index,'connected');
  row.pit=h2raceRead(index,'pit')===true;
  var lastLap=a27seconds(h2raceRead(index,'lastLap'));
  if(lastLap!==null&&isFinite(lastLap)&&lastLap>0&&lastLap<86400)row.lastLap=lastLap;
  if(a27ir()&&row.connected===false&&row.gapKind==='track')row.gap=null;
  if(row.gap!==null&&Math.abs(row.gap)>864000)row.gap=null;
  if(row.laps!==null&&(Math.abs(row.laps)>=1000||Math.floor(row.laps)!==row.laps))row.laps=null;
  row.sameClass=h2raceSameClass(index,plan);
  row.lapRelation=h2raceRelationValue(row);
  if(a27ir()){
    var rating=h2raceNumber(h2raceRead(index,'irating'));
    if(rating!==null&&rating>0)row.irating=rating;
    row.licence=h2raceString(h2raceRead(index,'licence')).replace(/\s+/g,' ');
    if(/^(unknown|none|-|0)$/i.test(row.licence))row.licence='';
  }
  if(withFlags!==false){var flag=h2raceFlagData(row);row.flag=flag.id;row.flagText=flag.text;row.flagColor=flag.color;row.flagAvailable=flag.available;}
  return row;
}
function h2raceRole(slot) {
  if(a27ir()) {
    var row=h2raceRow(slot,false);
    if(row.kind==='player')return h2raceT('player')+(row.towing?' · TOW':'');
    if(row.kind==='grid')return h2raceT('grid');
    if(row.kind==='classification')return h2raceT('raceGap');
    return h2raceT(row.kind==='class'?(slot<0?'pinnedAhead':'pinnedBehind'):(slot<0?'physicalAhead':'physicalBehind'));
  }
  if(slot===0)return h2raceT('player');
  if(h2racePositionOnly())return h2raceT('raceGap');
  var pinned=a27multi()&&Math.abs(slot)===(h2raceRowsCount()-1)/2;
  return h2raceT(pinned?(slot<0?'pinnedAhead':'pinnedBehind'):(slot<0?'physicalAhead':'physicalBehind'));
}
function h2raceText(slot,field) {
  var row=h2raceRow(slot,field==='flagText'||field==='flag');
  if(!row.available)return field==='meta'||field==='pit'||field==='flagText'||field==='flag'?'':'—';
  if(field==='name')return row.name||'—';
  if(field==='position')return row.position>0?'P'+Math.floor(row.position):'—';
  if(field==='gap'){
    if(row.kind==='player'||a27ir()&&row.connected===false&&row.gapKind==='track')return '—';
    // Show ahead as unsigned positive and behind as negative. Keep full
    // lap differences separate from circular track intervals.
    if(row.gapKind==='race'&&row.laps!==null&&row.laps!==0)return (row.laps<0?'−':'')+Math.abs(row.laps)+'L';
    return row.gap===null?'—':(row.gap>0?'−':'')+Math.abs(row.gap).toFixed(1);
  }
  if(field==='gapNote')return row.gapNote;
  if(field==='irating')return row.irating===null?'—':String(Math.round(row.irating));
  if(field==='licence')return row.licence||'—';
  if(field==='pit')return row.pit?'PIT':'';
  if(field==='lastLap')return row.lastLap===null?'—':a27time({TotalSeconds:row.lastLap},true);
  if(field==='flagText')return row.flagText;
  if(field==='flag')return row.flag;
  if(field==='meta'){
    var parts=[];
    if(row.gapNote)parts.push(row.gapNote);
    if(row.className){if(row.kind!=='class')parts.push(a27short(row.className,11));if(row.classPosition>0)parts.push('C'+Math.floor(row.classPosition));}
    if(row.kind!=='class'&&row.laps!==null&&row.laps!==0)parts.push((row.laps<0?'−':'')+Math.abs(row.laps)+'L');
    if(a27ir()&&row.connected===false)parts.push(h2raceT('notOnTrack'));
    return parts.join(' · ');
  }
  return '';
}
function h2raceFlag(slot,part) {
  var row=h2raceRow(slot,true);
  if(part==='id')return row.flag;
  if(part==='color')return row.flagColor;
  if(part==='visible')return row.flag!=='';
  if(part==='available')return row.flagAvailable;
  return row.flagText;
}
function h2raceColor(slot) {
  var row=h2raceRow(slot,false);
  if(!row.available)return '#FF56616A';
  if(row.laps>0)return row.sameClass?'#FFFF9398':'#FF98666D';
  if(row.laps<0)return row.sameClass?'#FF8CCEFF':'#FF517A96';
  if(!row.sameClass)return '#FF61717C';
  return '#FFDEE6EC';
}
function h2raceMutedColor(slot) {
  var row=h2raceRow(slot,false);
  if(!row.available)return '#FF56616A';
  if(row.laps>0)return row.sameClass?'#FFFF9398':'#FF98666D';
  if(row.laps<0)return row.sameClass?'#FF8CCEFF':'#FF517A96';
  return row.sameClass?'#FF96A6B4':'#FF61717C';
}
function h2raceSummary(scope,field) {
  var count=h2raceCount(),player=null,list=[],i,index,known=0,sum=0,rating;
  if(count<1)return field==='name'?'':'—';
  try{player=Number(getplayerleaderboardposition());}catch(e){}
  if(scope==='class'){
    if(!h2raceValid(player))return field==='name'?'':'—';
    if(field==='name')return a27short(h2raceClassName(player),11);
    list=h2raceClassList(player,count);
  }else{
    if(field==='name')return h2raceT('lobby');
    for(i=1;i<=count;i++)if(h2raceValid(i))list.push(i);
  }
  if(field==='count')return list.length?String(list.length):'—';
  if(!a27ir()||!list.length)return '—';
  for(i=0;i<list.length;i++){
    index=list[i];rating=h2raceNumber(h2raceRead(index,'irating'));
    if(rating!==null&&rating>0){sum+=rating;known++;}
  }
  if(field==='coverage')return known+'/'+list.length;
  // An incomplete mean is deliberately unavailable; never call this value SOF.
  if(field==='irating')return known===list.length?String(Math.round(sum/known)):'—';
  return '';
}

// Static geometry does not depend on receiving a live lap percentage.
function a27map() {
  var allow=a27d('MapAllowed');
  // EVO's native reader explicitly lacks map support despite inherited true.
  return a27live()&&a27game()!=='assettocorsaevo'&&allow!==false&&allow!==0&&a27knownTrack();
}

// Game-specific telemetry availability.
function h2gtFuelAvailable() { return !a27gt() || a27dn('MaxFuel')>0; }
// The iRacing adapter maps its in-game replay flag to GameInMenu rather than
// IsGameReplay. Preserve generic playback detection and identify this case.
a27playback=(function(base){return function() {
  if(a27live()&&a27ir()) {var replay=h2irValue(h2irRaw(),'IsReplayPlaying');if(replay!==null&&replay!==undefined)return a27active(replay);}
  return base();
};})(a27playback);
a27fuel=(function(base){return function() {
  var value=base();
  // GT7 electric cars have zero capacity, but regeneration can make the raw
  // fuel value positive. A positive, confirmed capacity is required for fuel.
  if(!h2gtFuelAvailable()) {
    value.fuel=null;value.rate=null;value.range=null;value.reserve=null;
    value.margin=null;value.add=null;
  }
  return value;
};})(a27fuel);
a27fuelUsed=(function(base){return function(name) { return h2gtFuelAvailable()?base(name):null; };})(a27fuelUsed);

function h2gtGrid() {
  var result={available:false,position:null,count:null};
  if(!a27live()||!a27gt())return result;
  try {
    // SimHub 9.13 adds these normalized values but clamps unknown 0/-1 to 1.
    // Confirm the two independent raw scalar values from one native snapshot.
    var raw=NewRawData();if(!raw)return result;
    var position=raw.PreRaceStartPositionOrQualiPos,count=raw.NumCarsAtPreRace;
    if(position===null||position===undefined||count===null||count===undefined)return result;
    position=Number(position);count=Number(count);
    if(!isFinite(position)||!isFinite(count)||Math.floor(position)!==position||Math.floor(count)!==count||position<1||count<1||position>count||count>1000)return result;
    // Requiring matching normalized values also avoids presenting unsupported
    // position/count on older adapters. This does not infer a session mode.
    if(a27dn('Position')!==position||a27dn('OpponentsCount')!==count)return result;
    result.available=true;result.position=position;result.count=count;
  }catch(e){}
  return result;
}

// Some adapters expose tank percentage through the common fuel fields.
function h2percentFuel() { return /^(fm7|fm8|fh4|fh5|fh6)$/.test(a27game()); }
// These exact readers return constant false for all seven common flags.
function h2noNativeFlags() { return /^(fm7|fm8|fh4|fh5|fh6|wrcx|wrc10)$/.test(a27game()); }
(function () {
  var fuel=a27fuel, state=a27fuelState, unit=a27unit, used=a27fuelUsed;
  var flagUnavailable=a27flagUnavailable, flagList=a27flagList;
  a27fuel=function () {
    if(!h2percentFuel())return fuel();
    var amount=a27dn('Fuel'),capacity=a27dn('MaxFuel'),value=null;
    // Both normalized fields use the same selected-unit conversion.
    if(a27live()&&amount!==null&&capacity>0&&amount>=0&&amount<=capacity)value=amount/capacity*100;
    return {fuel:value,rate:null,range:null,reserve:null,remaining:null,approximate:false,margin:null,add:null,toLine:null};
  };
  a27fuelState=function () {
    if(!h2percentFuel())return state();
    if(!a27driving())return state();
    var amount=a27fuel().fuel;
    if(amount===null)return [a27t(102),a27t(58),'#FF8C9BAA'];
    if(amount===0)return [a27t(28),a27t(207),'#FFFF6B70'];
    return [a27t(198),a27t(115),'#FF8CCEFF'];
  };
  a27unit=function () { return h2percentFuel()?'%':unit(); };
  a27fuelUsed=function (name) { return h2percentFuel()?null:used(name); };
  a27flagUnavailable=function () { return h2noNativeFlags()||flagUnavailable(); };
  a27flagList=function () { return h2noNativeFlags()?[]:flagList(); };
}());

// Keep positions and gaps readable in DIM while other-class names stay subdued.
function h2raceCriticalInk(slot) {
  var row=h2raceRow(slot,false);
  if(!row.available)return a27color('#FF56616A');
  if(a27dim()&&!row.sameClass)return row.laps>0?'#FF946269':row.laps<0?'#FF557E99':'#FF778590';
  var ink=row.laps>0?(row.sameClass?'#FFFF9398':'#FF98666D'):row.laps<0?(row.sameClass?'#FF8CCEFF':'#FF517A96'):row.sameClass?'#FFDEE6EC':'#FF61717C';
  return a27color(ink);
}

// Race classification and session-phase update.
var H2_LIVE_LABELS={"en":{"leader":"LEADER","classLeader":"CLASS LEADER","lapping":"LAPPING YOU","lapped":"YOU ARE LAPPING","grid":"GRID","formation":"FORMATION","waiting":"WAITING FOR START","noLimit":"NO TIME LIMIT"},"ru":{"leader":"ЛИДЕР","classLeader":"ЛИДЕР КЛАССА","lapping":"ОБГОНЯЕТ НА КРУГ","lapped":"КРУГОВОЙ","grid":"СТАРТОВАЯ РЕШЁТКА","formation":"ПРОГРЕВОЧНЫЙ КРУГ","waiting":"ОЖИДАНИЕ СТАРТА","noLimit":"БЕЗ ЛИМИТА ВРЕМЕНИ"},"de":{"leader":"FÜHRENDER","classLeader":"KLASSENFÜHRER","lapping":"ÜBERRUNDET DICH","lapped":"WIRD ÜBERRUNDET","grid":"STARTAUFSTELLUNG","formation":"EINFÜHRUNGSRUNDE","waiting":"WARTEN AUF START","noLimit":"OHNE ZEITLIMIT"},"es":{"leader":"LÍDER","classLeader":"LÍDER DE CLASE","lapping":"TE DOBLA","lapped":"LO ESTÁS DOBLANDO","grid":"PARRILLA","formation":"VUELTA DE FORMACIÓN","waiting":"ESPERANDO SALIDA","noLimit":"SIN LÍMITE DE TIEMPO"},"fr":{"leader":"LEADER","classLeader":"LEADER DE CAT.","lapping":"VOUS PREND UN TOUR","lapped":"VOUS LE DOUBLEZ","grid":"GRILLE","formation":"TOUR DE FORMATION","waiting":"EN ATTENTE DU DÉPART","noLimit":"SANS LIMITE DE TEMPS"},"it":{"leader":"LEADER","classLeader":"LEADER DI CLASSE","lapping":"TI STA DOPPIANDO","lapped":"LO STAI DOPPIANDO","grid":"GRIGLIA","formation":"GIRO DI FORMAZIONE","waiting":"ATTESA PARTENZA","noLimit":"SENZA LIMITE DI TEMPO"},"pt-BR":{"leader":"LÍDER","classLeader":"LÍDER DA CLASSE","lapping":"VAI TE DAR VOLTA","lapped":"VOCÊ DÁ UMA VOLTA","grid":"GRID","formation":"VOLTA DE FORMAÇÃO","waiting":"AGUARDANDO LARGADA","noLimit":"SEM LIMITE DE TEMPO"},"pl":{"leader":"LIDER","classLeader":"LIDER KLASY","lapping":"DUBLUJE CIĘ","lapped":"DUBLOWANY","grid":"POLA STARTOWE","formation":"OKRĄŻENIE FORMUJĄCE","waiting":"OCZEKIWANIE NA START","noLimit":"BEZ LIMITU CZASU"},"cs":{"leader":"VEDOUCÍ","classLeader":"VEDOUCÍ TŘÍDY","lapping":"PŘEDJÍŽDÍ TĚ O KOLO","lapped":"O KOLO ZPĚT","grid":"STARTOVNÍ ROŠT","formation":"ZAVÁDĚCÍ KOLO","waiting":"ČEKÁNÍ NA START","noLimit":"BEZ ČASOVÉHO LIMITU"},"tr":{"leader":"LİDER","classLeader":"SINIF LİDERİ","lapping":"SANA TUR BİNDİRİYOR","lapped":"TUR BİNDİRİYORSUN","grid":"START DİZİLİŞİ","formation":"FORMASYON TURU","waiting":"START BEKLENİYOR","noLimit":"SÜRE SINIRI YOK"},"ja":{"leader":"首位","classLeader":"クラス首位","lapping":"周回遅れにされる","lapped":"周回遅れの車","grid":"グリッド","formation":"フォーメーション","waiting":"スタート待ち","noLimit":"時間制限なし"},"ko":{"leader":"선두","classLeader":"클래스 선두","lapping":"나를 랩다운시킴","lapped":"내가 랩다운시킴","grid":"출발 그리드","formation":"포메이션 랩","waiting":"출발 대기","noLimit":"시간 제한 없음"},"zh":{"leader":"领先车手","classLeader":"组别领先","lapping":"将套你一圈","lapped":"你将套他一圈","grid":"发车位","formation":"暖胎圈","waiting":"等待发车","noLimit":"无时间限制"}};
(function(){for(var lang in H2_LIVE_LABELS)for(var key in H2_LIVE_LABELS[lang])H2_RACE_LABELS[lang][key]=H2_LIVE_LABELS[lang][key];})();
var H2_WORLD_LABELS={en:'NOT ON TRACK',ru:'НЕ НА ТРАССЕ',de:'NICHT AUF DER STRECKE',es:'FUERA DE PISTA',fr:'HORS PISTE',it:'FUORI PISTA','pt-BR':'FORA DA PISTA',pl:'POZA TOREM',cs:'MIMO TRAŤ',tr:'PİSTTE DEĞİL',ja:'コース上にいません',ko:'트랙 밖',zh:'不在赛道上'};
(function(){for(var lang in H2_WORLD_LABELS)H2_RACE_LABELS[lang].notOnTrack=H2_WORLD_LABELS[lang];})();
// iRacing race timing uses the SDK car index, independent of leaderboard order.
function h2irRaw() {
  if(!a27live()||!a27ir())return null;
  try {
    var raw=NewRawData(),serialized=a27p('Apex27LanguagePlugin.LiveTelemetryJson');
    var telemetry=serialized?JSON.parse(String(serialized)):a27p('Apex27LanguagePlugin.LiveTelemetry');
    if(!telemetry) {
      var status=a27p('Apex27LanguagePlugin.LiveTelemetryStatus');
      // Do not rewind history to the adapter's retained packet after a direct
      // stream stalls or disconnects. An absent bridge can still use SimHub.
      if(status==='Stale'||status==='Disconnected'||status==='Invalid data'||status==='Updating')return null;
      return raw;
    }
    if(!raw)return null;
    var directId=h2raceNumber(h2irGet(telemetry,'SessionUniqueID')),nativeId=h2irNumber(raw,'SessionUniqueID');
    // A newer packet cannot be matched to a roster from a different session.
    if(directId!==null&&nativeId!==null&&directId!==nativeId)return null;
    return {Telemetry:telemetry,SessionData:raw.SessionData};
  }catch(e){return null;}
}
function h2irGet(object,key) { try{return object?object[key]:null;}catch(e){return null;} }
function h2irValue(raw,key) {
  var telemetry=h2irGet(raw,'Telemetry');if(!telemetry)return null;
  // Typed SDK getters index a dictionary and can throw CLR exceptions for
  // variables omitted by an older recording. Check the dictionary first.
  if(typeof telemetry.ContainsKey==='function'&&!telemetry.ContainsKey(key))return null;
  return h2irGet(telemetry,key);
}
function h2irNumber(raw,key) { return h2raceNumber(h2irValue(raw,key)); }
function h2irState(raw) {
  var v=h2irValue(raw,'SessionState'),n=h2raceNumber(v);
  if(n!==null)return n;
  var names={invalid:0,getincar:1,warmup:2,paradelaps:3,racing:4,checkered:5,cooldown:6};
  return names[String(v).toLowerCase().replace(/[^a-z]/g,'')];
}
function h2irArray(raw,key,car) {
  var a=h2irValue(raw,key),n=h2raceArrayLength(a);
  return car!==null&&car>=0&&car<n?h2raceNumber(h2irGet(a,car)):null;
}
function h2irDriver(index,raw) {
  // Dashboard indices are stable SDK CarIdx + 1. They do not depend on a
  // normalized leaderboard which can omit cars until they leave the garage.
  var car=h2raceNumber(index);
  return car!==null&&car>=1&&car<=512&&car===Math.floor(car)&&h2irEntrant(raw,car-1)?car-1:null;
}
function h2irRoster(raw) { try{return raw.SessionData.DriverInfo.Drivers;}catch(e){return null;} }
a27race=(function(base){return function() {
  if(!a27ir())return base();
  var raw=h2irRaw(),sessions=h2irGet(h2irGet(h2irGet(raw,'SessionData'),'SessionInfo'),'Sessions'),number=h2irNumber(raw,'SessionNum');
  for(var i=0,n=h2raceArrayLength(sessions);i<n;i++)if(h2raceNumber(sessions[i].SessionNum)===number)return /race/i.test(String(sessions[i].SessionType||''));
  return base();
};})(a27race);
function h2irEntrants(raw) {
  var key=h2irFrameKey(raw)+'|'+h2irNumber(raw,'SessionUniqueID'),cache=typeof A27_STATE!=='undefined'?A27_STATE.h2irRoster:null;
  if(cache&&cache.key===key)return cache.entries;
  var roster=h2irRoster(raw),entries=[],seen={},byCar={};
  for(var i=0,n=h2raceArrayLength(roster);i<n;i++) {
    var d=roster[i],car=h2raceNumber(h2irGet(d,'CarIdx'));
    if(!d||car===null||car<0||car>=512||car!==Math.floor(car)||seen[car]||a27active(h2irGet(d,'IsSpectator'))||a27active(h2irGet(d,'CarIsPaceCar')))continue;
    seen[car]=true;entries.push(d);byCar[car]=d;
  }
  if(typeof A27_STATE!=='undefined')A27_STATE.h2irRoster={key:key,entries:entries,byCar:byCar};
  return entries;
}
function h2irEntrant(raw,car) {
  var entries=h2irEntrants(raw);
  if(typeof A27_STATE!=='undefined'&&A27_STATE.h2irRoster)return A27_STATE.h2irRoster.byCar[car]||null;
  for(var i=0;i<entries.length;i++)if(h2raceNumber(entries[i].CarIdx)===car)return entries[i];
  return null;
}
function h2mapPositions() {
  if(!a27ir())return '';
  var raw=h2irRaw(),entries=h2irLiveStandings(raw).entries,positions={},progress={};
  for(var i=0;i<entries.length;i++)if(entries[i].number) {
    var key='$'+entries[i].number;
    positions[key]=h2irPosition(raw,entries[i].car,false);
    progress[key]=entries[i].located?h2irArray(raw,'CarIdxLapDistPct',entries[i].car):null;
  }
  return JSON.stringify({stamp:Date.now(),positions:positions,progress:progress});
}
function h2raceGapDetail(slot) {
  var row=h2raceRow(slot,false);
  if(!row.available||row.kind==='player')return '';
  var value=null;
  if(row.gapKind==='track') {
    if(!a27race())return '';
    if(row.laps!==null&&row.laps!==0)value=(row.laps<0?'−':'')+Math.abs(row.laps)+'L';
    else if(row.raceGap!==null)value=(row.raceGap>0?'−':'')+Math.abs(row.raceGap).toFixed(1);
  }else if(row.connected!==false&&row.trackGap!==null)value='≈'+(row.trackGap>0?'−':'')+Math.abs(row.trackGap).toFixed(1);
  return value===null?'':value;
}
// Keep a session table available before entering the car and in warmup. The
// detailed practice timing view remains selectable in dashboard settings.
a27traffic=(function(base){return function() {
  if(!a27live()||a27stage())return false;
  if(a27race())return a27ir()?h2irEntrants(h2irRaw()).length>0:a27fieldCount()>1;
  return a27p('Settings.ApexSessionPanel.Key')!=='timing'&&(a27ir()?h2irEntrants(h2irRaw()).length>1:a27fieldCount()>1);
};})(a27traffic);
function h2irTowing(raw) {return h2irNumber(raw,'PlayerCarTowTime')>0;}
function h2irLocated(raw,car) {
  var p=h2irArray(raw,'CarIdxLapDistPct',car),surface=h2irValue(raw,'CarIdxTrackSurface'),value=h2irGet(surface,car);
  return p!==null&&p>=0&&p<=1&&h2raceNumber(value)!==-1&&String(value).toLowerCase()!=='notinworld';
}
h2raceCount=(function(base){return function() {
  if(!a27ir())return base();
  var entries=h2irEntrants(h2irRaw()),limit=0;
  for(var i=0;i<entries.length;i++)limit=Math.max(limit,Number(entries[i].CarIdx)+1);
  return limit;
};})(h2raceCount);
a27fieldCount=(function(base){return function(){return a27ir()?h2raceCount():base();};})(a27fieldCount);
a27playerIndex=(function(base){return function() {
  if(!a27ir())return base();
  var raw=h2irRaw(),car=h2irNumber(raw,'PlayerCarIdx');
  return car!==null&&h2irEntrant(raw,car)?car+1:-1;
};})(a27playerIndex);
a27class=(function(base){return function(index,part) {
  if(!a27ir())return base(index,part);
  if(part==='position'){var p=h2raceRead(index,'classPosition');return p>0?'C'+p:'';}
  if(part==='color')return '#FF96A6B4';
  return a27short(h2raceClassName(index),11);
};})(a27class);
a27multi=(function(base){return function() {
  if(!a27ir())return base();
  var entries=h2irEntrants(h2irRaw()),classes={};
  for(var i=0;i<entries.length;i++) {
    var id=h2raceString(h2irGet(entries[i],'CarClassID'));
    if(id)classes['$'+id]=true;
  }
  var count=0;for(var key in classes)count++;
  return count>1;
};})(a27multi);
h2raceSummary=(function(base){return function(scope,field) {
  if(!a27ir())return base(scope,field);
  var raw=h2irRaw(),entries=h2irEntrants(raw),own=h2irEntrant(raw,h2irNumber(raw,'PlayerCarIdx')),list=[],known=0,sum=0;
  var classId=h2raceString(h2irGet(own,'CarClassID'));
  if(field==='name')return scope==='class'?a27short(own?h2raceRead(Number(own.CarIdx)+1,'className'):'',11):h2raceT('lobby');
  for(var i=0;i<entries.length;i++)if(scope!=='class'||classId&&h2raceString(entries[i].CarClassID)===classId)list.push(entries[i]);
  if(field==='count')return list.length?String(list.length):'—';
  for(i=0;i<list.length;i++){var rating=h2raceNumber(h2irGet(list[i],'IRating'));if(rating>0){known++;sum+=rating;}}
  if(field==='coverage')return known+'/'+list.length;
  return field==='irating'&&list.length&&known===list.length?String(Math.round(sum/known)):'—';
};})(h2raceSummary);
h2racePlan=(function(base){return function() {
  if(!a27ir())return base();
  var raw=h2irRaw(),key=h2irFrameKey(raw)+'|'+h2irNumber(raw,'SessionUniqueID')+'|'+h2raceRowsCount(),cached=typeof A27_STATE!=='undefined'?A27_STATE.h2irPlan:null;
  if(cached&&cached.key===key)return cached.plan;
  var entries=h2irLiveStandings(raw).entries,player=a27playerIndex(),car=h2irDriver(player,raw);
  var edge=(h2raceRowsCount()-1)/2,plan={slots:{},player:player,count:h2raceCount(),multi:a27multi(),classes:[],edge:edge};
  var own=car===null?null:h2irLiveStandings(raw).byCar[car],i;
  // Before the green show the starting order, even when cars are staggered
  // side by side. In the garage show classification without a track reference.
  var state=h2irState(raw),grid=a27race()&&state>=1&&state<=3;
  if(grid)entries=entries.filter(function(e){return e.located&&!e.pitStart;});
  if(grid||!own||!h2irLocated(raw,car)) {
    var start=0;
    if(own)for(i=0;i<entries.length;i++)if(entries[i].car===car){start=Math.max(0,Math.min(i-edge,entries.length-h2raceRowsCount()));break;}
    for(i=0;i<h2raceRowsCount()&&start+i<entries.length;i++)plan.slots[i-edge]=entries[start+i].car+1;
    plan.overview=true;plan.grid=grid;if(typeof A27_STATE!=='undefined')A27_STATE.h2irPlan={key:key,plan:plan};return plan;
  }
  plan.slots[0]=player;var seen={};seen[player]=true;
  if(plan.multi&&a27race()) {
    for(i=0;i<entries.length;i++)if(entries[i].classId===own.classId)plan.classes.push(entries[i].car+1);
    plan.classes.sort(function(a,b){return h2raceRead(a,'classPosition')-h2raceRead(b,'classPosition');});
    for(i=0;i<plan.classes.length;i++)if(plan.classes[i]===player) {
      if(i>0){plan.slots[-edge]=plan.classes[i-1];seen[plan.classes[i-1]]=true;}
      if(i+1<plan.classes.length){plan.slots[edge]=plan.classes[i+1];seen[plan.classes[i+1]]=true;}
      break;
    }
  }else plan.multi=false;
  var nearby=[];var p=h2irArray(raw,'CarIdxLapDistPct',car);
  for(i=0;i<entries.length;i++)if(!seen[entries[i].car+1]&&h2irLocated(raw,entries[i].car)) {
    var delta=h2irArray(raw,'CarIdxLapDistPct',entries[i].car)-p;
    if(delta>.5)delta-=1;else if(delta<-.5)delta+=1;
    nearby.push({index:entries[i].car+1,delta:delta});
  }
  nearby.sort(function(a,b){return Math.abs(a.delta)-Math.abs(b.delta)||a.index-b.index;});
  var ahead=1,behind=1,limit=plan.multi?edge-1:edge;
  for(i=0;i<nearby.length;i++) {
    var e=nearby[i];
    if(e.delta>=0&&ahead<=limit)plan.slots[-ahead++]=e.index;
    else if(e.delta<0&&behind<=limit)plan.slots[behind++]=e.index;
  }
  if(typeof A27_STATE!=='undefined')A27_STATE.h2irPlan={key:key,plan:plan};return plan;
};})(h2racePlan);
function h2irClassId(index,raw) {
  var car=h2irDriver(index,raw),roster=h2irRoster(raw);
  for(var i=0,n=h2raceArrayLength(roster);i<n;i++)if(h2raceNumber(roster[i].CarIdx)===car)return h2raceString(roster[i].CarClassID);
  return '';
}
function h2irDistance(raw,car) {
  if(car===null||car===undefined)return null;
  var entry=h2irLiveStandings(raw).byCar[car];
  return entry&&entry.progress>=0?entry.progress:null;
}
function h2irSessionSection(raw, key) {
  var data=h2irGet(raw,'SessionData'),typed=h2irGet(data,key);
  return typed!==null&&typed!==undefined?typed:h2irGet(h2irGet(data,'Dictionnary'),key);
}
function h2irResultPosition(results, car, ownClass, qualifying) {
  for(var i=0,n=h2raceArrayLength(results);i<n;i++) {
    var row=h2irGet(results,i);
    if(h2raceNumber(h2irGet(row,'CarIdx'))!==car)continue;
    var rank=h2raceNumber(h2irGet(row,ownClass?'ClassPosition':'Position'));
    // QualifyResultsInfo uses zero-based overall and class positions.
    // SessionInfo ResultsPositions uses one-based overall / zero-based class.
    if(rank!==null&&(ownClass||qualifying))rank++;
    return rank!==null&&rank>=1&&rank<=512&&rank===Math.floor(rank)?rank:null;
  }
  return null;
}
function h2irGridPosition(raw, car, ownClass) {
  var state=h2irState(raw);
  if(!a27race()||state<1||state>3||car===null)return null;
  var info=h2irSessionSection(raw,'SessionInfo'),sessions=h2irGet(info,'Sessions');
  var number=h2irNumber(raw,'SessionNum'),current=null,qualify=null,qualifyNum=-1;
  for(var i=0,n=h2raceArrayLength(sessions);i<n;i++) {
    var row=h2irGet(sessions,i),num=h2raceNumber(h2irGet(row,'SessionNum'));
    if(num===number)current=row;
    if(num!==null&&num<number&&num>qualifyNum&&/qualify/i.test(String(h2irGet(row,'SessionType')||''))){qualify=row;qualifyNum=num;}
  }
  var rank=h2irResultPosition(h2irGet(current,'ResultsPositions'),car,ownClass,false);
  if(rank!==null)return rank;
  var results=h2irSessionSection(raw,'QualifyResultsInfo');
  rank=h2irResultPosition(h2irGet(results,'Results'),car,ownClass,true);
  if(rank!==null)return rank;
  return h2irResultPosition(h2irGet(qualify,'ResultsPositions'),car,ownClass,false);
}
function h2irPosition(raw,car,ownClass) {
  var n=h2irArray(raw,ownClass?'CarIdxClassPosition':'CarIdxPosition',car);
  if(n!==null&&n>=1&&n<=512&&Math.floor(n)===n)return n;
  if(car===h2irNumber(raw,'PlayerCarIdx')) {
    n=h2irNumber(raw,ownClass?'PlayerCarClassPosition':'PlayerCarPosition');
    if(n!==null&&n>=1&&n<=512&&n===Math.floor(n))return n;
  }
  var grid=h2irGridPosition(raw,car,ownClass);if(grid!==null)return grid;
  if(!a27race()) {
    var lap=h2irArray(raw,'CarIdxBestLapTime',car),entrant=h2irEntrant(raw,car),entries=h2irEntrants(raw),rank=1;
    if(!(lap>0&&lap<86400)||!entrant)return null;
    for(var i=0;i<entries.length;i++) {
      if(ownClass&&h2raceString(entries[i].CarClassID)!==h2raceString(entrant.CarClassID))continue;
      var other=h2raceNumber(entries[i].CarIdx),best=h2irArray(raw,'CarIdxBestLapTime',other);
      if(best>0&&(best<lap||best===lap&&other<car))rank++;
    }
    return rank;
  }
  return null;
}
function h2irEstimatedLap(raw,car) {
  var roster=h2irRoster(raw);
  for(var i=0,n=h2raceArrayLength(roster);i<n;i++)if(h2raceNumber(roster[i].CarIdx)===car) {
    var lap=h2raceNumber(h2irGet(roster[i],'CarClassEstLapTime'));
    if(lap>0&&lap<86400)return lap;
  }
  return null;
}
function h2irRelative(index) {
  var raw=h2irRaw(),car=h2irDriver(index,raw),player=h2irNumber(raw,'PlayerCarIdx');
  if(!h2irLocated(raw,car)||!h2irLocated(raw,player))return null;
  var own=h2irArray(raw,'CarIdxEstTime',player),other=h2irArray(raw,'CarIdxEstTime',car);
  var lap=h2irEstimatedLap(raw,player),otherLap=h2irEstimatedLap(raw,car);
  var p=h2irArray(raw,'CarIdxLapDistPct',player),q=h2irArray(raw,'CarIdxLapDistPct',car);
  if(car===null||player===null||!(lap>0&&otherLap>0)||own===null||other===null||own<0||other<0||own>lap||other>otherLap||p===null||q===null||p<0||q<0)return null;
  if((own===0&&p>.001)||(other===0&&q>.001))return null;
  // SDK estimated elapsed times follow the track's speed profile. Scale other
  // classes onto the player's reference lap; this remains an approximation.
  var sameClass=h2irClassId(index,raw)===h2irClassId(player+1,raw);
  var seconds=(sameClass?other:other*lap/otherLap)-own,distance=q-p;
  if(distance>.5){distance-=1;seconds-=lap;}
  else if(distance<-.5){distance+=1;seconds+=lap;}
  // Some recordings expose zero/stale estimates. Do not turn a small physical
  // interval into a near-full-lap gap when the timing coordinates disagree.
  if(Math.abs(distance)>.0001&&(seconds===0||seconds*distance<0))return null;
  return -seconds;
}
function h2irRaceGapEstimate(raw,car) {
  var standings=h2irLiveStandings(raw),own=standings.byCar[h2irNumber(raw,'PlayerCarIdx')],other=standings.byCar[car];
  if(!own||!other||!own.distanceKnown||!other.distanceKnown||own.pitStart||other.pitStart)return null;
  var lap=h2irEstimatedLap(raw,own.car);
  return lap>0?(own.progress-other.progress)*lap:null;
}
function h2irUseRaceGapEstimate(raw,car) {
  var own=h2irLiveStandings(raw).byCar[h2irNumber(raw,'PlayerCarIdx')];
  var a=h2irArray(raw,'CarIdxF2Time',h2irNumber(raw,'PlayerCarIdx')),b=h2irArray(raw,'CarIdxF2Time',car);
  return !!(own&&own.towRecovery)||a===null||b===null||a<0||b<0||a===0&&b===0;
}
function h2raceLiveGapText(slot) {
  if(!a27ir())return h2raceText(slot,'gap');
  // Row identity/order stays in the table batch; refresh only this car's gap.
  var row=h2raceRow(slot,false);
  if(!row.available||row.kind==='player'||row.kind==='grid')return '—';
  var raw=h2irRaw(),car=h2irDriver(row.index,raw),value=null,estimated=false;
  if(row.gapKind==='race') {
    var laps=h2raceRead(row.index,'laps');
    if(laps!==null&&laps!==0)return (laps<0?'−':'')+Math.abs(laps)+'L';
    value=h2raceRead(row.index,'raceGap');estimated=h2irUseRaceGapEstimate(raw,car);
  }else {
    value=h2irRelative(row.index);estimated=!row.sameClass;
  }
  return value===null||!isFinite(value)?'—':(estimated?'≈':'')+(value>0?'−':'')+Math.abs(value).toFixed(1);
}
h2raceRead=(function(base){return function(index,field) {
  if(!a27ir())return base(index,field);
  var raw=h2irRaw(),car=h2irDriver(index,raw),d=car===null?null:h2irEntrant(raw,car);
  if(field==='available')return d!==null;
  if(!d)return null;
  if(field==='name')return h2irGet(d,'UserName')||h2irGet(d,'TeamName');
  if(field==='carNumber')return h2irGet(d,'CarNumber');
  if(field==='className')return h2irGet(d,'CarClassShortName')||h2irGet(d,'CarScreenNameShort')||h2irGet(d,'CarClassID');
  if(field==='irating')return h2irGet(d,'IRating');
  if(field==='licence')return h2irGet(d,'LicString');
  if(field==='connected')return h2irLocated(raw,car);
  if(field==='pit')return a27active(h2irGet(h2irValue(raw,'CarIdxOnPitRoad'),car))||h2irArray(raw,'CarIdxTrackSurface',car)===1;
  if(field==='position'||field==='classPosition')return h2irPosition(raw,car,field==='classPosition');
  if(field==='gap')return h2irRelative(index);
  if(field==='raceGap') {
    if(h2irState(raw)<4)return null;
    if(h2irUseRaceGapEstimate(raw,car))return h2irRaceGapEstimate(raw,car);
    var ownTime=h2irArray(raw,'CarIdxF2Time',h2irNumber(raw,'PlayerCarIdx')),otherTime=h2irArray(raw,'CarIdxF2Time',car);
    // Both zero is the SDK's unavailable timing state for different cars.
    if(car!==h2irNumber(raw,'PlayerCarIdx')&&ownTime===0&&otherTime===0)return null;
    return a27race()&&ownTime!==null&&otherTime!==null&&ownTime>=0&&otherTime>=0?otherTime-ownTime:null;
  }
  if(field==='lastLap'||field==='bestLap') {
    var seconds=h2irArray(raw,field==='lastLap'?'CarIdxLastLapTime':'CarIdxBestLapTime',car);
    return seconds>0&&seconds<86400?{TotalSeconds:seconds}:null;
  }
  if(field==='laps'&&a27race()&&h2irState(raw)>=4) {
    if(h2irPlayerFinished(raw))return h2irFinalLapRelation(raw,car);
    if(h2irTowing(raw))return null;
    var player=h2irNumber(raw,'PlayerCarIdx'),own=h2irDistance(raw,player),other=h2irDistance(raw,car);
    if(own!==null&&other!==null) { var diff=other-own;return diff<0?Math.ceil(diff):Math.floor(diff); }
  }
  return null;
};})(h2raceRead);
h2raceClassIndex=(function(base){return function(ordinal) {
  if(!a27ir()||!a27race())return base(ordinal);
  if(!(ordinal>0))return null;
  var player=a27playerIndex(),raw=h2irRaw(),own=h2irClassId(player,raw),n=h2raceCount();
  if(!own)return null;
  for(var i=1;i<=n;i++)if(h2raceValid(i)&&h2irClassId(i,raw)===own&&h2raceRead(i,'classPosition')===ordinal)return i;
  return null;
};})(h2raceClassIndex);
h2raceClassList=(function(base){return function(player,count) {
  var list=base(player,count);
  if(a27ir()&&a27race())list.sort(function(a,b){return (h2raceRead(a,'classPosition')||999)-(h2raceRead(b,'classPosition')||999);});
  return list;
};})(h2raceClassList);
a27position=(function(base){return function() {
  if(!a27ir()||!a27race())return base();
  var raw=h2irRaw(),p=h2irPosition(raw,h2irNumber(raw,'PlayerCarIdx'),false);
  return p===null?'—':'P'+p;
};})(a27position);
a27class=(function(base){return function(index,part) {
  if(a27ir()&&a27race()&&part==='position') { var p=h2raceRead(index,'classPosition');return p>0?'C'+p:''; }
  return base(index,part);
};})(a27class);

function h2irPlayerFinished(raw) {
  if(a27playback())return false;
  if(h2irState(raw)===6)return true;
  var player=h2irLiveStandings(raw).byCar[h2irNumber(raw,'PlayerCarIdx')];
  return !!(player&&player.finished);
}
function h2irFinalLapCounts(raw) {
  var standings=h2irLiveStandings(raw),counts={},results={},state=h2irState(raw);
  var sessions=h2irGet(h2irSessionSection(raw,'SessionInfo'),'Sessions'),number=h2irNumber(raw,'SessionNum');
  for(var i=0,n=h2raceArrayLength(sessions);i<n;i++) {
    var session=h2irGet(sessions,i);
    if(h2raceNumber(h2irGet(session,'SessionNum'))!==number)continue;
    var rows=h2irGet(session,'ResultsPositions');
    for(var j=0,m=h2raceArrayLength(rows);j<m;j++) {
      var row=h2irGet(rows,j),car=h2raceNumber(h2irGet(row,'CarIdx')),laps=h2raceNumber(h2irGet(row,'LapsComplete'));
      if(car!==null&&laps!==null&&laps>=0&&laps<10000&&Math.floor(laps)===laps)results[car]=laps;
    }
    break;
  }
  for(i=0;i<standings.entries.length;i++) {
    var entry=standings.entries[i];
    // During checkered, a car still racing does not yet have a final lap count.
    if(state!==6&&!entry.finished)continue;
    var observed=entry.finished&&entry.progress>=0?Math.floor(entry.progress):null;
    var supplied=Object.prototype.hasOwnProperty.call(results,entry.car)?results[entry.car]:null;
    // Results are authoritative in cooldown. Before then they may lag a finish
    // crossing we observed; only that frozen crossing is a safe fallback.
    if(supplied!==null&&(state===6||observed===null||supplied>=observed))counts[entry.car]=supplied;
    else if(observed!==null)counts[entry.car]=observed;
  }
  return counts;
}
function h2irFinalLapRelation(raw,car) {
  var counts=h2irFinalLapCounts(raw),player=h2irNumber(raw,'PlayerCarIdx');
  return Object.prototype.hasOwnProperty.call(counts,car)&&Object.prototype.hasOwnProperty.call(counts,player)?counts[car]-counts[player]:null;
}
function h2raceRelationValue(row) {
  if(!row.available||row.kind==='player'||row.kind==='grid'||!a27race())return 0;
  if(a27ir()) {
    var raw=h2irRaw();
    var car=h2irDriver(row.index,raw),player=h2irNumber(raw,'PlayerCarIdx');
    if(h2irPlayerFinished(raw))return h2irFinalLapRelation(raw,car)||0;
    if(h2irTowing(raw))return 0;
    var own=h2irDistance(raw,player),other=h2irDistance(raw,car);
    // Round around the nearest physical encounter, including an approaching lap.
    // Adjacent cars crossing the timing line remain on the same racing lap.
    if(own!==null&&other!==null)return Math.round(other-own);
  }
  return row.laps||0;
}
function h2raceRelation(row) {return row&&typeof row.lapRelation==='number'?row.lapRelation:0;}
h2raceColor=(function(base){return function(slot) {
  var row=h2raceRow(slot,false),laps=h2raceRelation(row);
  if(laps>0)return row.sameClass?'#FFFF9398':'#FF98666D';
  if(laps<0)return row.sameClass?'#FF8CCEFF':'#FF517A96';
  return base(slot);
};})(h2raceColor);
h2raceMutedColor=h2raceColor;
h2raceCriticalInk=function(slot) {
  var row=h2raceRow(slot,false),relation=h2raceRelation(row);
  if(!row.available)return a27color('#FF56616A');
  if(a27dim()&&!row.sameClass)return relation>0?'#FF946269':relation<0?'#FF557E99':'#FF778590';
  return a27color(relation>0?(row.sameClass?'#FFFF9398':'#FF98666D'):relation<0?(row.sameClass?'#FF8CCEFF':'#FF517A96'):row.sameClass?'#FFDEE6EC':'#FF61717C');
};
h2raceText=(function(base){return function(slot,field) {
  if(field!=='meta')return base(slot,field);
  var row=h2raceRow(slot,false);if(!row.available)return '';
  if(row.towing)return h2raceT('player')+' · TOW';
  var parts=[],relation=h2raceRelation(row);
  if(row.kind==='class')parts.push(h2raceRole(slot));
  else if(row.position===1)parts.push(h2raceT('leader'));
  else if(a27multi()&&row.classPosition===1)parts.push(h2raceT('classLeader'));
  if(relation!==0)parts.push((relation>0?'+':'−')+Math.abs(relation)+(Math.abs(relation)===1?' lap':' laps'));
  if(a27multi()&&row.className)parts.push((row.kind==='class'?'':a27short(row.className,9)+' ')+(row.classPosition>0?'C'+row.classPosition:''));
  if(!parts.length&&slot!==0)parts.push(row.gapNote);
  if(a27ir()&&row.connected===false)parts.push(h2raceT('notOnTrack'));
  return parts.join(' · ');
};})(h2raceText);

// Projected class result, not an official post-race rating. Team splits and
// incomplete/unranked fields are intentionally unavailable.
function h2raceIRDelta(slot) {
  if(!a27live()||!a27ir()||!a27race()||a27playback())return null;
  var raw=h2irRaw(),state=h2irState(raw);
  if(!(state>=4&&state<=5))return null;
  var weekend;try{weekend=raw.SessionData.WeekendInfo;}catch(e){return null;}
  if(!a27active(h2irGet(weekend,'Official'))||a27active(h2irGet(weekend,'TeamRacing')))return null;
  var row=h2raceRow(slot,false);if(!row.available)return null;
  var car=h2irDriver(row.index,raw),roster=h2irRoster(raw),length=h2raceArrayLength(roster),own=null,i;
  for(i=0;i<length;i++)if(h2raceNumber(roster[i].CarIdx)===car)own=roster[i];
  if(!own)return null;
  var classId=h2raceString(own.CarClassID),rating=h2raceNumber(own.IRating),rank=h2irPosition(raw,car,true),entries=[],ranks={};
  if(!classId||!(rating>0)||!(rank>0))return null;
  for(i=0;i<length;i++) {
    var d=roster[i];if(a27active(d.IsSpectator)||a27active(d.CarIsPaceCar)||h2raceString(d.CarClassID)!==classId)continue;
    var id=h2raceNumber(d.CarIdx),ir=h2raceNumber(d.IRating),pos=h2irPosition(raw,id,true),completed=h2irArray(raw,'CarIdxLapCompleted',id);
    // A disconnected car can retain a valid classification and rating. Its
    // missing track fraction must not erase the entire class projection.
    if(!(ir>0)||!(pos>0)||ranks[pos]||completed===null||completed<0)return null;
    ranks[pos]=true;entries.push({car:id,rating:ir,rank:pos});
  }
  var n=entries.length;if(n<2||rank>n)return null;
  var strength=Math.exp(rating*Math.LN2/1600)-1,expected=0;
  for(i=0;i<n;i++) {
    if(!ranks[i+1])return null;
    if(entries[i].car!==car)expected+=strength/(strength+Math.exp(entries[i].rating*Math.LN2/1600)-1);
  }
  return Math.round(200/n*(n-rank-expected-(n/2-rank)/100));
}
function h2raceIRText(slot) { var n=h2raceIRDelta(slot);return n===null?'—':'≈'+a27signed(n,0); }
function h2raceIRColor(slot) {
  var n=h2raceIRDelta(slot),same=h2raceRow(slot,false).sameClass;
  return n===null||n===0?(same?'#FF96A6B4':'#FF61717C'):n>0?(same?'#FF62DBB5':'#FF3A7968'):(same?'#FFFF9398':'#FF98666D');
}

a27fieldPoint=(function(base){return function(index) {
  if(!a27ir())return base(index);
  if(!a27live()||!h2raceValid(index))return null;
  var raw=h2irRaw(),car=h2irDriver(index,raw),p=h2irArray(raw,'CarIdxLapDistPct',car);
  return h2irLocated(raw,car)?p:null;
};})(a27fieldPoint);
a27field=(function(base){return function(index,field) {
  if(field==='label'&&a27ir()) { var p=h2raceRead(index,'position');return p>0?String(p):'·'; }
  if(field==='left')return h2fieldLeft(index);
  if(a27ir()) {
    if(field==='visible')return index!==a27playerIndex()&&a27fieldPoint(index)!==null;
    var pit=h2raceRead(index,'pit')===true;
    if(field==='fill')return pit?'#FF49341C':'#FF182430';
    if(field==='color')return pit?'#FFFFB35C':'#FFDEE6EC';
  }
  return base(index,field);
};})(a27field);
function h2fieldDrawOrder() {
  var key=a27ir()?h2irFrameKey(h2irRaw())+'|'+h2irNumber(h2irRaw(),'SessionUniqueID'):a27game()+'|'+Math.floor(Date.now()/50),cached=typeof A27_STATE!=='undefined'?A27_STATE.h2fieldOrder:null;
  if(cached&&cached.key===key)return cached.order;
  var order=[];
  for(var i=1,n=a27fieldCount();i<=n;i++)if(h2raceValid(i))order.push(i);
  order.sort(function(a,b){return (h2raceRead(b,'position')||999)-(h2raceRead(a,'position')||999)||b-a;});
  if(typeof A27_STATE!=='undefined')A27_STATE.h2fieldOrder={key:key,order:order};
  return order;
}
function h2fieldIndex(repetition) {return h2fieldDrawOrder()[repetition-1]||null;}
function h2fieldPlayerIndex(index) {return index!==null&&index===a27playerIndex();}
function h2fieldLabel(index) {
  var p=h2raceRead(index,'position');return p>0?String(p):'·';
}

function h2duration(seconds) {
  var t=Math.max(0,Math.ceil(seconds)),h=Math.floor(t/3600),m=Math.floor(t%3600/60),s=t%60;
  return (h>0?h+':'+('0'+m).slice(-2):String(m))+':'+('0'+s).slice(-2);
}
function h2phase() {
  var label=a27session(),seconds=a27seconds(a27d('SessionTimeLeft')),text='—';
  if(a27playback())return {label:a27t(133),text:'—'};
  if(a27ir()) {
    var raw=h2irRaw(),state=h2irState(raw),native=h2irNumber(raw,'SessionTimeRemain'),elapsed=h2irNumber(raw,'SessionTime');
    seconds=native;
    if(a27race()) {
      if(state===1)label=h2raceT('grid');
      if(state===2)label=a27t(155);
      if(state===3)label=h2raceT('formation');
      if(state===5||state===6)label=a27t(209);
      // Negative session time is a supplied pre-start countdown, not a timer
      // started on opening the dashboard. Never assume a fixed grid duration.
      if(state>=1&&state<=3&&elapsed!==null&&elapsed<0&&elapsed>=-3600)seconds=-elapsed;
      if(state>=1&&state<=3&&!(seconds!==null&&seconds>=0&&seconds<172800))return {label:label,text:h2raceT('waiting')};
    }
    // The SDK uses 604800 seconds for an unlimited session.
    if(!(seconds!==null&&seconds>=0&&seconds<172800)) {
      if(a27race()&&state>=4&&state<=5) {
        var total=h2irNumber(raw,'SessionLapsTotal'),remain=h2irNumber(raw,'SessionLapsRemainEx');
        if(!(total>0&&total<10000))total=a27dn('TotalLaps');
        if(total>0&&total<10000) {
          var roster=h2irRoster(raw),length=h2raceArrayLength(roster),leader=null;
          for(var i=0;i<length;i++)if(h2irPosition(raw,h2raceNumber(roster[i].CarIdx),false)===1)leader=h2raceNumber(roster[i].CarIdx);
          var distance=h2irDistance(raw,leader),lap=h2irArray(raw,'CarIdxLastLapTime',leader);
          if(distance!==null)remain=Math.max(0,Math.ceil(total-distance));
          text=remain!==null&&remain>=0&&remain<=total?remain+(remain===1&&a27lang()==='en'?' lap':a27t(5)):'—';
          if(distance!==null&&lap>0&&lap<86400&&total>distance)text+=' · ≈'+h2duration((total-distance)*lap);
          return {label:label,text:text};
        }
      }
      return {label:label,text:seconds!==null&&seconds>=172800?h2raceT('noLimit'):'—'};
    }
  }
  if(seconds!==null&&seconds>=0&&seconds<172800)text=h2duration(seconds);
  return {label:label,text:text};
}
h2footerTime=function() {
  var now=new Date(),clock=('0'+now.getHours()).slice(-2)+':'+('0'+now.getMinutes()).slice(-2);
  if(!a27live())return clock;
  var phase=h2phase();return clock+'   ·   '+phase.label+'  '+phase.text;
};

h2raceText=(function(base){return function(slot,field) {
  var value=base(slot,field);
  if(field==='gap'&&a27ir()&&value!=='—') {
    var row=h2raceRow(slot,false);
    if(row.gapEstimated&&value.indexOf('L')<0)return '≈'+value;
    if(row.gapKind==='track'&&(!row.sameClass||h2irRelative(row.index)===null))return '≈'+value;
  }
  return value;
};})(h2raceText);

// Invalid laps are local session observations. They never replace the valid
// reference used by the delta or the predicted lap.
function h2raceBest() {
  var native=h2positiveTime('BestLapTime'),empty={seconds:native,invalid:false,estimated:false};
  if(typeof A27_STATE==='undefined'||!A27_STATE)return empty;
  var raw=a27ir()?h2irRaw():null,key=h2sectorSessionKey()+'|'+h2irNumber(raw,'SessionUniqueID');
  var lap=a27dn('CurrentLap'),p=a27progress(),clock=a27seconds(a27d('CurrentLapTime'));
  var stamp=Date.now()/1000,sessionTime=h2irNumber(raw,'SessionTime'),state=A27_STATE.h2raceBest;
  var restart=a27yes(a27d('IsSessionRestart'));
  if(!state||state.key!==key||(restart&&!state.restart)||(state.previous&&lap!==null&&lap<state.previous.lap)||(state.previous&&sessionTime!==null&&state.previous.sessionTime!==null&&sessionTime<state.previous.sessionTime-.05))
    state=A27_STATE.h2raceBest={key:key,best:null,previous:null,complete:false,invalid:false,pit:false};
  state.restart=restart;
  if(native!==null&&(!state.best||native<=state.best.seconds))state.best={seconds:native,invalid:false,estimated:false};
  if(!a27driving()||a27stage()||lap===null||p===null||p<0) {
    state.previous=null;state.complete=false;
    return state.best||empty;
  }
  var previous=state.previous,dt=previous?(sessionTime!==null&&previous.sessionTime!==null?sessionTime-previous.sessionTime:stamp-previous.stamp):null;
  var close=previous&&stamp-previous.stamp>=0&&stamp-previous.stamp<=2.5&&dt>=0&&dt<=2.5;
  var wrap=close&&lap===previous.lap+1&&previous.p>.9&&p<.1;
  if(wrap) {
    var measured=clock!==null&&previous.clock!==null?previous.clock+dt-clock:null;
    // At an invalid lap the exported last-lap time can still be the preceding
    // valid lap. Accept it only when it agrees with this timing-line crossing.
    var last=h2positiveTime('LastLapTime'),observed=measured;
    var exact=last!==null&&measured!==null&&Math.abs(last-measured)<.15;
    if(exact)observed=last;
    if(state.complete&&!state.pit&&!a27pit()&&observed>0&&observed<86400&&(!state.best||observed<state.best.seconds))
      state.best={seconds:observed,invalid:state.invalid||previous.invalid,estimated:!exact};
    state.complete=true;state.invalid=a27invalid();state.pit=a27pit();
  }else if(!close||lap!==previous.lap||p<previous.p-.02||(clock!==null&&previous.clock!==null&&clock<previous.clock-.2)) {
    state.complete=clock!==null&&clock>=0&&clock<=1&&p<.01;
    state.invalid=a27invalid();state.pit=a27pit();
  }else {
    state.invalid=state.invalid||a27invalid();state.pit=state.pit||a27pit();
  }
  state.previous={lap:lap,p:p,clock:clock,stamp:stamp,sessionTime:sessionTime,invalid:a27invalid()};
  return state.best||empty;
}
function h2raceBestText() {var best=h2raceBest();return best.seconds===null?'—':(best.estimated?'≈':'')+a27time({TotalSeconds:best.seconds},true);}
function h2raceBestLabel() {var best=h2raceBest();return h2t('sessionBest')+(best.invalid?' · '+a27t(16):'');}
function h2raceBestColor() {return h2raceBest().invalid?'#FFFFB35C':'#FFDEE6EC';}
function h2raceValidLabel() {
  var labels={en:'BEST VALID',ru:'ЛУЧШИЙ ЗАЧТЁННЫЙ',de:'BESTE GÜLTIGE',es:'MEJOR VÁLIDA',fr:'MEILLEUR VALIDE',it:'MIGLIORE VALIDO','pt-BR':'MELHOR VÁLIDA',pl:'NAJLEPSZE WAŻNE',cs:'NEJLEPŠÍ PLATNÉ',tr:'EN İYİ GEÇERLİ',ja:'有効ベスト',ko:'유효 베스트',zh:'有效最佳'};
  return labels[a27lang()]||labels.en;
}
function h2raceDeltaTitle() {
  var labels={en:'DELTA TO VALID SESSION BEST',ru:'Δ К ЗАЧТЁННОМУ РЕКОРДУ СЕССИИ',de:'DELTA ZUR GÜLTIGEN SESSIONBESTZEIT',es:'DELTA A MEJOR VÁLIDA DE SESIÓN',fr:'DELTA AU MEILLEUR VALIDE DE SESSION',it:'DELTA AL MIGLIOR VALIDO DI SESSIONE','pt-BR':'DELTA À MELHOR VÁLIDA DA SESSÃO',pl:'DELTA DO WAŻNEGO REKORDU SESJI',cs:'DELTA K PLATNÉMU REKORDU RELACE',tr:'GEÇERLİ SEANS REKORUNA FARK',ja:'セッション有効ベストとの差',ko:'세션 유효 베스트 대비 델타',zh:'与本节有效最佳圈速差值'};
  return labels[a27lang()]||labels.en;
}

// Live race tracking and valid lap history.
// Live iRacing standings and optional iRacing Extra Properties integration.
var h2irSnapshotPosition=h2irPosition;
function h2irFrameKey(raw) {
  var tick=h2irNumber(raw,'SessionTick');
  return h2irNumber(raw,'SessionNum')+'|'+(tick===null?Math.floor(new Date().getTime()/100):tick)+'|'+h2irNumber(raw,'SessionTime')+'|'+h2irNumber(raw,'ReplaySessionTime');
}
function h2irExtraEntries(raw) {
  if(!a27ir()||!a27live())return {};
  var key=h2irFrameKey(raw),cached=typeof A27_STATE!=='undefined'?A27_STATE.h2irExtraEntries:null;
  if(cached&&cached.key===key)return cached.entries;
  var prefix='IRacingExtraProperties.iRacing_Leaderboard_Driver_',entries={},running=a27p('IRacingExtraProperties.PluginRunning');
  if(running!==false&&running!==0&&running!=='False'&&(a27p('IRacingExtraProperties.PluginVersion')!==null||a27p(prefix+'00_CarNumber')!==null||a27p(prefix+'01_CarNumber')!==null)) {
    var count=Math.min(512,Math.max(h2raceArrayLength(h2irRoster(raw)),h2raceCount())+1);
    for(var i=0;i<count;i++) {
      var path=prefix+(i<10?'0':'')+i+'_',number=h2raceString(a27p(path+'CarNumber'));
      if(!number)continue;
      var id='$'+number;
      entries[id]=Object.prototype.hasOwnProperty.call(entries,id)?null:path;
    }
  }
  if(typeof A27_STATE!=='undefined')A27_STATE.h2irExtraEntries={key:key,entries:entries};
  return entries;
}
function h2irExtraCar(raw,car,field) {
  var roster=h2irRoster(raw),number='';
  for(var i=0,n=h2raceArrayLength(roster);i<n;i++)if(h2raceNumber(roster[i].CarIdx)===car){number=h2raceString(roster[i].CarNumber);break;}
  var path=h2irExtraEntries(raw)['$'+number];
  return path?a27p(path+field):null;
}
function h2irFinishPosition(raw,car,ownClass,completed) {
  var sessions=h2irGet(h2irSessionSection(raw,'SessionInfo'),'Sessions'),number=h2irNumber(raw,'SessionNum'),limit=h2irRaceLapLimit(raw);
  for(var i=0,n=h2raceArrayLength(sessions);i<n;i++) {
    var session=h2irGet(sessions,i);
    if(h2raceNumber(h2irGet(session,'SessionNum'))!==number)continue;
    var results=h2irGet(session,'ResultsPositions');
    for(var j=0,m=h2raceArrayLength(results);j<m;j++) {
      var row=h2irGet(results,j);
      if(h2raceNumber(h2irGet(row,'CarIdx'))!==car)continue;
      var laps=h2raceNumber(h2irGet(row,'LapsComplete'));
      var finishLaps=limit!==null&&completed!==null?Math.min(limit,completed):completed;
      if(h2irState(raw)!==6&&!(finishLaps!==null&&laps!==null&&laps>=finishLaps))return null;
      return h2irResultPosition([row],car,ownClass,false);
    }
  }
  return null;
}
function h2irFinishOrder(entries,ownClass) {
  var groups={},i;
  for(i=0;i<entries.length;i++) {
    var e=entries[i],key=ownClass?'$'+e.classId:'all';
    if(!groups[key])groups[key]=[];groups[key].push(e);
  }
  for(var key in groups) {
    var list=groups[key],used={},next=1;
    for(i=0;i<list.length;i++) {
      var rank=ownClass?list[i].finalClassPosition:list[i].finalPosition;
      if(rank>0&&!used[rank]){used[rank]=true;list[i][ownClass?'classPosition':'position']=rank;}
      else list[i][ownClass?'classPosition':'position']=null;
    }
    for(i=0;i<list.length;i++)if(list[i][ownClass?'classPosition':'position']===null) {
      while(used[next])next++;list[i][ownClass?'classPosition':'position']=next;used[next++]=true;
    }
  }
}
function h2irLiveStandings(raw) {
  if(!raw)return {entries:[],byCar:{}};
  var replay=a27playback(),storage='standings-v5-'+(replay?'replay':'live'),session=h2irObservationKey(raw),frame=h2irFrameKey(raw),time=h2irNumber(raw,replay?'ReplaySessionTime':'SessionTime'),state=h2irState(raw);
  if(time===null)time=h2irNumber(raw,'SessionTime');
  var saved=typeof A27_STATE!=='undefined'?A27_STATE.h2irLiveStandings:null;
  if(saved&&saved.session===session&&saved.frame===frame)return saved;
  // Formula roots are separate in SimHub. Share lost-car observations so map,
  // table and header retain the same distance when a car leaves the world.
  if(typeof getsharedvalueordefault==='function') {
    try {var shared=JSON.parse(String(getsharedvalueordefault('APEX27',storage,'null')));if(shared&&shared.session===session)saved=shared;}catch(e){}
  }
  if(!saved||saved.session!==session||(time!==null&&saved.time!==null&&time<saved.time-.5))saved={session:session,frame:null,time:time,history:{}};
  if(saved.frame===frame){if(typeof A27_STATE!=='undefined')A27_STATE.h2irLiveStandings=saved;return saved;}
  var roster=h2irRoster(raw),entries=[],byCar={},classes={},lapLimit=h2irRaceLapLimit(raw),i,n;
  for(i=0,n=h2raceArrayLength(roster);i<n;i++) {
    var d=roster[i],car=h2raceNumber(h2irGet(d,'CarIdx'));
    if(!d||car===null||car<0||car>=512||car!==Math.floor(car)||byCar[car]||a27active(h2irGet(d,'IsSpectator'))||a27active(h2irGet(d,'CarIsPaceCar')))continue;
    var completed=h2irArray(raw,'CarIdxLapCompleted',car),started=h2irArray(raw,'CarIdxLap',car),pct=h2irArray(raw,'CarIdxLapDistPct',car),past=saved.history[car];
    var progress=null,located=h2irLocated(raw,car),towing=car===h2irNumber(raw,'PlayerCarIdx')&&(h2irTowing(raw)||!located&&past&&past.towing);
    var inPit=a27active(h2irGet(h2irValue(raw,'CarIdxOnPitRoad'),car))||h2irArray(raw,'CarIdxTrackSurface',car)===1;
    var pitStart=false;
    if(a27race()&&state>=1&&state<=3)pitStart=inPit||!located;
    else if(a27race()&&(state===4||state===5))pitStart=past?!!past.pitStart&&(inPit||!located):!towing&&(inPit||!located)&&!(completed>0);
    var distanceKnown=towing?!!(past&&past.distanceKnown):located||!!(past&&past.distanceKnown);
    if(located&&!towing) {
      var lap=started===0?-1:completed!==null&&completed>=-1?completed:started!==null&&started>0?started-1:null;
      // The started-lap counter can lead the completed counter by one packet.
      if(lap!==null&&started>0&&started-1===lap+1&&pct<.2&&!(past&&past.towing))lap++;
      if(lap!==null)progress=lap+pct;
      if(past&&!past.towing&&saved.time!==null&&time!==null&&time-saved.time>=0&&time-saved.time<2&&((past.progress%1+1)%1)>.85&&pct<.15&&progress!==null&&progress<past.progress-.5&&!a27active(h2irGet(h2irValue(raw,'CarIdxOnPitRoad'),car)))progress=Math.floor(past.progress)+1+pct;
    }
    // Keep a disconnected car's last observed distance instead of resetting it
    // to the start line. The race roster still includes non-starters and DNFs.
    if(progress===null&&past)progress=towing?past.progress:completed!==null&&completed>=0?Math.max(past.progress,completed):past.progress;
    if(progress===null&&completed!==null&&completed>=0)progress=completed;
    if(progress===null)progress=-2;
    var flags=h2irArray(raw,'CarIdxSessionFlags',car),finished=!replay&&!!(past&&past.finished);
    if(!replay&&(state===4||state===5)) {
      var official=h2irSnapshotPosition(raw,car,false);
      if(flags!==null&&(flags&1)!==0||state===5&&lapLimit!==null&&completed>=lapLimit||state===5&&official===1)finished=true;
      if(state===5&&saved.state===5&&past&&past.completed>=0&&completed>past.completed&&!towing)finished=true;
    }
    if(finished)progress=past&&past.finished?past.progress:completed!==null&&completed>=0?completed:Math.floor(progress);
    var finalPosition=null,finalClassPosition=null;
    if(!replay&&(state===6||state===5&&finished)) {
      finalPosition=h2irFinishPosition(raw,car,false,completed);
      finalClassPosition=h2irFinishPosition(raw,car,true,completed);
      if(finalPosition===null)finalPosition=past&&past.finalPosition||null;
      if(finalClassPosition===null)finalClassPosition=past&&past.finalClassPosition||null;
      if(car===h2irNumber(raw,'PlayerCarIdx')) {
        if(finalPosition===null)finalPosition=h2irNumber(raw,'PlayerCarPosition');
        if(finalClassPosition===null)finalClassPosition=h2irNumber(raw,'PlayerCarClassPosition');
      }
      if(!(finalPosition>=1&&finalPosition<=512))finalPosition=h2irSnapshotPosition(raw,car,false);
      if(!(finalClassPosition>=1&&finalClassPosition<=512))finalClassPosition=h2irSnapshotPosition(raw,car,true);
    }
    if((located||towing||finished||pitStart)&&progress>=-2)saved.history[car]={progress:progress,distanceKnown:distanceKnown,pitStart:pitStart,completed:completed,towing:towing,finished:finished,finalPosition:finalPosition,finalClassPosition:finalClassPosition};
    var entry={car:car,number:h2raceString(h2irGet(d,'CarNumber')),classId:h2raceString(h2irGet(d,'CarClassID')),rating:h2raceNumber(h2irGet(d,'IRating')),progress:progress,distanceKnown:distanceKnown,pitStart:pitStart,located:located,towRecovery:!!towing,finished:finished,finalPosition:finalPosition,finalClassPosition:finalClassPosition,completed:completed,started:started,official:h2irSnapshotPosition(raw,car,false),officialClass:h2irSnapshotPosition(raw,car,true),position:null,classPosition:null};
    entry.gridRank=pitStart?h2irGridPosition(raw,car,false):null;
    entries.push(entry);byCar[car]=entry;
  }
  entries.sort(function(a,b) {
    if((state===4||state===5)&&a27race()) {
      if(a.pitStart!==b.pitStart)return a.pitStart?1:-1;
      if(a.pitStart&&b.pitStart)return (a.gridRank||a.official||999)-(b.gridRank||b.official||999)||a.car-b.car;
    }
    // Finished cars retain their crossing distance while other cars keep racing.
    // During replay SessionState and
    // classification may still describe the finished live session, while the
    // per-car distances describe the earlier race shown by the replay.
    if(!replay&&state!==4&&state!==5) {
      var official=(a.official||999)-(b.official||999);if(official)return official;
    }
    return b.progress-a.progress||(a.official||999)-(b.official||999)||a.car-b.car;
  });
  var towCar=h2irNumber(raw,'PlayerCarIdx'),towEntry=byCar[towCar];
  if(!replay&&(state===4||state===5)&&towEntry&&towEntry.towRecovery&&!towEntry.distanceKnown&&!towEntry.finished) {
    var towRank=h2irNumber(raw,'PlayerCarPosition');
    if(!(towRank>=1&&towRank<=entries.length&&Math.floor(towRank)===towRank))towRank=towEntry?towEntry.official:null;
    if(towEntry&&towRank>=1&&towRank<=entries.length) {
      for(i=0;i<entries.length;i++)if(entries[i].car===towCar){entries.splice(i,1);break;}
      entries.splice(towRank-1,0,towEntry);
    }
  }
  for(i=0;i<entries.length;i++) {
    var e=entries[i],classKey='$'+e.classId;
    e.position=!replay&&state!==4&&state!==5?e.official:i+1;
    if(!classes[classKey])classes[classKey]=[];
    classes[classKey].push(e);e.classPosition=!replay&&state!==4&&state!==5?e.officialClass:classes[classKey].length;
  }
  if(!replay&&(state===5||state===6)) {
    h2irFinishOrder(entries,false);h2irFinishOrder(entries,true);
    entries.sort(function(a,b){return a.position-b.position||a.car-b.car;});
  }
  saved.frame=frame;saved.time=time;saved.state=state;saved.entries=entries;saved.byCar=byCar;
  if(typeof A27_STATE!=='undefined')A27_STATE.h2irLiveStandings=saved;
  if(typeof setsharedvalue==='function')setsharedvalue('APEX27',storage,JSON.stringify(saved));
  return saved;
}
h2irPosition=function(raw,car,ownClass) {
  if(car===null||car===undefined)return null;
  if(!a27ir()||!a27race())return h2irSnapshotPosition(raw,car,ownClass);
  var e=h2irLiveStandings(raw).byCar[car];
  return e?(ownClass?e.classPosition:e.position):h2irSnapshotPosition(raw,car,ownClass);
};
function h2irGainNumber(value) {
  if(value===null||value===undefined)return null;
  var text=String(value).replace(/[\s,\u00a0]/g,'').replace(/\u2212/g,'-');
  return /^[+-]?\d+(?:\.\d+)?$/.test(text)?Number(text):null;
}
function h2irRatingEligible(raw) {
  var weekend=h2irGet(h2irGet(raw,'SessionData'),'WeekendInfo');
  var official=h2irGet(weekend,'Official');
  if(official===null||official===undefined)official=a27p('GameRawData.SessionData.WeekendInfo.Official');
  var unofficial=h2irGet(h2irGet(weekend,'WeekendOptions'),'Unofficial');
  if(unofficial===null||unofficial===undefined)unofficial=a27p('GameRawData.SessionData.WeekendInfo.WeekendOptions.Unofficial');
  if(a27active(unofficial))return false;
  return official===true||official===1||String(official).toLowerCase()==='true'||String(official)==='1';
}
h2raceIRDelta=function(slot) {
  if(!a27live()||!a27ir()||!a27race())return null;
  var raw=h2irRaw();if(h2irState(raw)<4)return null;
  var row=h2raceRow(slot,false);if(!row.available)return null;
  // The simulator decides whether this field meets its series requirements.
  // Apply that decision to supplied estimates as well as the local calculation.
  if(!h2irRatingEligible(raw))return null;
  var car=h2irDriver(row.index,raw),standings=h2irLiveStandings(raw),own=standings.byCar[car];
  if(!own||!own.classId)return null;
  var group=[],i;
  for(i=0;i<standings.entries.length;i++)if(standings.entries[i].classId===own.classId)group.push(standings.entries[i]);
  if(group.length<2)return null;
  var plugin=a27playback()?null:h2irGainNumber(h2irExtraCar(raw,car,'iRGainEstimation'));
  if(plugin!==null)return Math.round(plugin);
  var state=h2irState(raw);if(!(state>=4&&state<=6))return null;
  var weekend=h2irGet(h2irGet(raw,'SessionData'),'WeekendInfo');
  if(a27active(h2irGet(weekend,'TeamRacing'))||!(own.rating>0))return null;
  // Unknown ratings cannot be inferred, but an unstarted or disconnected car
  // with a supplied rating remains part of the class and does not blank it.
  for(i=0;i<group.length;i++)if(!(group[i].rating>0))return null;
  var n=group.length;
  var strength=Math.exp(own.rating*Math.LN2/1600)-1,expected=0;
  for(i=0;i<n;i++)if(group[i].car!==car)expected+=strength/(strength+Math.exp(group[i].rating*Math.LN2/1600)-1);
  return Math.round(200/n*(n-own.classPosition-expected-(n/2-own.classPosition)/100));
};

// SessionTimeLeft is the native countdown used by the original dashboard.
// Read the scalar properties as well: telemetry dictionaries and normalized
// data do not have identical availability in every game or recording.
function h2phaseScalar(key,raw) {
  var value=h2irNumber(raw,key);
  return value!==null?value:h2raceNumber(a27p('GameRawData.Telemetry.'+key));
}
function h2phaseState(raw) {
  var value=h2irValue(raw,'SessionState');
  if(value===null||value===undefined)value=a27p('GameRawData.Telemetry.SessionState');
  var number=h2raceNumber(value);
  if(number!==null)return number;
  var names={invalid:0,getincar:1,warmup:2,paradelaps:3,racing:4,checkered:5,cooldown:6};
  return names[String(value).toLowerCase().replace(/[^a-z]/g,'')];
}
function h2phaseFinite(seconds) {
  return seconds!==null&&isFinite(seconds)&&seconds>=0&&seconds<172800;
}
function h2phaseCountdown(raw,state) {
  if(a27ir()&&!raw)return null;
  var elapsed=a27ir()?h2phaseScalar('SessionTime',raw):null;
  if(a27race()&&state>=1&&state<=3&&elapsed!==null&&elapsed<0&&elapsed>=-3600)return -elapsed;
  // The SDK can switch to a new post-race countdown while normalized SimHub
  // timing still contains the race clock. Prefer the current SDK phase timer.
  var native=a27ir()?h2phaseScalar('SessionTimeRemain',raw):null;
  if(a27ir()&&a27race()&&state>=5)return h2phaseFinite(native)&&native>0?native:null;
  if(h2phaseFinite(native)&&native>0)return native;
  var candidates=[a27seconds(a27p('SessionTimeLeft')),a27seconds(a27d('SessionTimeLeft'))];
  if(a27ir())candidates.push(h2phaseScalar('SessionTimeRemain',raw));
  for(var i=0;i<candidates.length;i++)if(h2phaseFinite(candidates[i])&&candidates[i]>0)return candidates[i];
  if(!(a27ir()&&a27race()&&state>=1&&state<=3))for(i=0;i<candidates.length;i++)if(candidates[i]===0)return 0;
  // A timer can go slightly negative after its limit while cars finish laps.
  if(a27ir()&&state===4)for(i=0;i<candidates.length;i++)if(candidates[i]!==null&&candidates[i]<0&&candidates[i]>-172800)return 0;
  return null;
}
function h2phaseLapFinish(raw) {
  var total=a27ir()?h2irRaceLapLimit(raw):a27dn('TotalLaps'),remain=h2phaseScalar('SessionLapsRemainEx',raw);
  if(!(total>0&&total<10000))return null;
  if(!(remain!==null&&remain>=0&&remain<=total))remain=a27dn('RemainingLaps');
  var roster=h2irRoster(raw),length=h2raceArrayLength(roster),leader=null;
  for(var i=0;i<length;i++)if(h2irPosition(raw,h2raceNumber(roster[i].CarIdx),false)===1)leader=h2raceNumber(roster[i].CarIdx);
  var distance=h2irDistance(raw,leader),lap=h2irArray(raw,'CarIdxLastLapTime',leader);
  if(distance!==null)remain=Math.max(0,Math.ceil(total-distance));
  if(!(remain!==null&&remain>=0&&remain<=total))return null;
  var text=remain+(remain===1&&a27lang()==='en'?' lap':a27t(5));
  if(distance!==null&&lap>0&&lap<86400&&total>distance)text+=' · ≈'+h2duration((total-distance)*lap);
  return text;
}
h2phase=function() {
  var label=a27session(),replay=a27playback();
  var raw=a27ir()?h2irRaw():null,state=a27ir()?h2phaseState(raw):null;
  if(a27ir()&&a27race()) {
    if(state===1)label=h2raceT('grid');
    if(state===2)label=a27t(155);
    if(state===3)label=h2raceT('formation');
    if(state===5||state===6)label=a27t(112);
  }
  if(replay)label=a27t(133)+' / '+label;
  var seconds=h2phaseCountdown(raw,state);
  if(seconds!==null)return {label:label,text:h2duration(seconds)};
  // Replays retain a supplied session clock, as the native timer does. Do not
  // manufacture a live finish estimate when the recording has no countdown.
  if(replay)return {label:label,text:'—'};
  if(a27ir()&&a27race()&&state>=5)return {label:a27t(209),text:h2finishWaiting(state),waiting:true};
  if(a27ir()&&a27race()&&state>=1&&state<=3) {
    return {label:label,text:h2raceT('waiting')};
  }
  if(a27race()&&(state===null||state===undefined||state===4)) {
    var laps=h2phaseLapFinish(raw);
    if(laps!==null)return {label:label,text:laps};
  }
  var supplied=a27ir()?h2phaseScalar('SessionTimeRemain',raw):a27seconds(a27d('SessionTimeLeft'));
  return {label:label,text:supplied!==null&&supplied>=172800?h2raceT('noLimit'):'—'};
};
a27remaining=(function(base){return function(){return a27ir()&&!a27stage()?h2phase().text:base();};})(a27remaining);
function h2trafficTop(slot) {var n=h2raceRowsCount();return 460+(slot+(n-1)/2)*(n===11?45:n===7?70:98);}
function h2trafficHeight() {var n=h2raceRowsCount();return n===11?44:n===7?64:88;}

// Session observations use SimHub's built-in shared values between display bindings.
function h2lapRecordsRead() {
  if(typeof getsharedvalueordefault==='function') {
    var value=getsharedvalueordefault('APEX27','session-laps-v3','');
    if(value) {try{return JSON.parse(String(value));}catch(e){}}
  }
  return typeof A27_STATE!=='undefined'?A27_STATE.h2lapRecordsV2:null;
}
function h2lapRecordsWrite(state) {
  if(typeof A27_STATE!=='undefined')A27_STATE.h2lapRecordsV2=state;
  if(typeof setsharedvalue==='function')setsharedvalue('APEX27','session-laps-v3',JSON.stringify(state));
  return state;
}
function h2lapSample() {
  var raw=a27ir()?h2irRaw():null,clock=a27seconds(a27d('CurrentLapTime'));
  var p=a27progress(),lap=a27dn('CurrentLap'),last=h2positiveTime('LastLapTime'),pit=a27pit();
  var replay=a27playback(),time=h2irNumber(raw,replay?'ReplaySessionTime':'SessionTime'),incident=null,normalizedInvalid=a27normalizedInvalid(),telemetryInvalid=false;
  if(raw) {
    var n=h2irNumber(raw,'LapCurrentLapTime');if(n!==null&&n>=0)clock=n;
    n=h2irNumber(raw,'LapDistPct');if(n!==null&&n>=0&&n<=1)p=n;
    n=h2irNumber(raw,'Lap');if(n!==null&&n>=0)lap=n;
    n=h2irNumber(raw,'LapLastLapTime');if(n!==null)last=n>0&&n<86400?n:null;
    if(replay) {
      var car=h2irNumber(raw,'PlayerCarIdx');
      n=h2irArray(raw,'CarIdxLapDistPct',car);if(n!==null&&n>=0&&n<=1)p=n;
      n=h2irArray(raw,'CarIdxLap',car);if(n!==null&&n>=0)lap=n;
      n=h2irArray(raw,'CarIdxLastLapTime',car);if(n!==null)last=n>0&&n<86400?n:null;
      var pitRoad=h2irValue(raw,'CarIdxOnPitRoad');
      if(car!==null&&car>=0&&car<h2raceArrayLength(pitRoad)) {
        var onPitRoad=h2irGet(pitRoad,car);
        if(onPitRoad!==null&&onPitRoad!==undefined)pit=a27active(onPitRoad);
      }
      // Player lap-clock channels can remain frozen while viewing a replay.
      // Measured replay laps therefore use successive timing-line crossings.
      clock=null;
    }
    incident=h2irNumber(raw,'PlayerCarMyIncidentCount');
    if(incident===null) {
      var info=h2irGet(h2irGet(raw,'SessionData'),'DriverInfo');
      incident=h2raceNumber(h2irGet(info,'DriverIncidentCount'));
    }
    var surface=replay?h2irArray(raw,'CarIdxTrackSurface',h2irNumber(raw,'PlayerCarIdx')):h2irValue(raw,'PlayerTrackSurface');
    telemetryInvalid=h2raceNumber(surface)===0||String(surface).toLowerCase()==='offtrack';
  }
  var now=Date.now()/1000;
  return {lap:lap,p:p,clock:clock,last:last,time:time===null?now:time,wall:now,incident:incident,invalid:normalizedInvalid||telemetryInvalid,normalizedInvalid:normalizedInvalid,telemetryInvalid:telemetryInvalid,pit:pit};
}
function h2lapOffer(state,seconds,invalid,estimated,covered) {
  if(!(seconds>0&&seconds<86400))return;
  var lap={seconds:seconds,invalid:!!invalid,estimated:!!estimated,source:invalid?'invalid':covered?'observed':'unknown'};
  if(!invalid&&covered&&(!state.bestClean||seconds<state.bestClean.seconds))state.bestClean=lap;
  if(!state.best||seconds<state.best.seconds-.0005||(!invalid&&Math.abs(seconds-state.best.seconds)<.0005))state.best=lap;
  if(!invalid&&(!a27ir()||covered))state.lastValid=lap;
}
function h2lapObserve() {
  var native=h2positiveTime('BestLapTime'),empty={best:native===null?null:{seconds:native,invalid:false,estimated:false,source:'game'},lastValid:null};
  if(!a27live())return empty;
  var raw=a27ir()?h2irRaw():null,key=a27ir()?h2irObservationKey(raw):h2sectorSessionKey()+'|'+(a27playback()?'replay':'live');
  var s=h2lapSample(),state=h2lapRecordsRead(),restart=a27yes(a27d('IsSessionRestart'));
  if(!state||state.key!==key||(restart&&!state.restart)||(state.previous&&s.time<state.previous.time-.1)) {
    state={key:key,best:null,bestClean:null,lastValid:null,previous:null,start:null,covered:false,invalid:false,pit:false,pending:null,restart:restart};
    // Earlier lap times have no retained evidence for a clean-lap record.
  }
  state.restart=restart;
  if(native!==null&&(!state.best||native<=state.best.seconds))state.best={seconds:native,invalid:false,estimated:false,source:'game'};
  var prev=state.previous;
  if(prev&&s.wall===prev.wall&&s.time===prev.time&&s.p===prev.p&&s.last===prev.last&&s.normalizedInvalid===prev.normalizedInvalid&&s.telemetryInvalid===prev.telemetryInvalid&&s.incident===prev.incident&&s.pit===prev.pit)return state;
  if((!a27driving()&&!a27playback())||a27paused()||a27stage()||s.p===null||s.p<0||s.lap===null) {
    state.previous=null;state.start=null;state.pending=null;state.covered=false;
    return h2lapRecordsWrite(state);
  }
  var dt=prev?s.time-prev.time:null,wall=prev?s.wall-prev.wall:null;
  var close=prev&&dt>=0&&dt<=3&&wall>=0&&wall<=5;
  var rise=prev&&s.incident!==null&&prev.incident!==null&&s.incident>prev.incident;
  // Lap counters and lap clocks may change on adjacent packets. The actual
  // timing-line crossing is authoritative, independent of that update order.
  var crossed=close&&prev.p>.85&&s.p<.15&&s.p+1-prev.p<.1;
  if(state.pending&&s.time-state.pending.time<=2&&s.last!==null&&s.last!==state.pending.previousLast&&Math.abs(s.last-state.pending.seconds)<1) {
    var pending=state.pending;
    // Replace a locally measured completion with the supplied lap time when
    // the SDK publishes it one or more packets after the timing-line crossing.
    if(state.best&&state.best.estimated&&Math.abs(state.best.seconds-pending.seconds)<.0005)state.best=pending.previousBest;
    if(state.bestClean&&state.bestClean.estimated&&Math.abs(state.bestClean.seconds-pending.seconds)<.0005)state.bestClean=pending.previousClean;
    h2lapOffer(state,s.last,pending.invalid,false,pending.covered);state.pending=null;
    if(native!==null&&(!state.best||native<=state.best.seconds))state.best={seconds:native,invalid:false,estimated:false,source:'game'};
  }else if(state.pending&&s.time-state.pending.time>2)state.pending=null;
  if(crossed) {
    var width=s.p+1-prev.p,at=prev.time+(width>0?dt*(1-prev.p)/width:dt);
    var observed=state.start!==null?at-state.start:null;
    var clockDuration=prev.clock!==null&&s.clock!==null&&s.clock<prev.clock-1?prev.clock+dt-s.clock:null;
    // An SDK lap clock can recover the first observed completion even when the
    // dashboard was opened partway through that lap.
    if(!(observed>0)&&clockDuration>0)observed=clockDuration;
    var exact=s.last!==null&&s.last!==prev.last&&(observed===null||Math.abs(s.last-observed)<1);
    if(exact)observed=s.last;
    var bad=state.invalid||prev.invalid||!!rise;
    if(!state.pit&&!prev.pit&&!s.pit&&observed>0&&observed<86400) {
      var previousBest=state.best,previousClean=state.bestClean;
      h2lapOffer(state,observed,bad,!exact,state.covered);
      state.pending={seconds:observed,invalid:bad,covered:state.covered,time:s.time,previousLast:prev.last,previousBest:previousBest,previousClean:previousClean};
    }
    // Normalized invalidity can clear one packet after the geometric crossing.
    // Wait briefly for that old flag to clear; fresh raw evidence still counts.
    state.waitInvalidClear=!!(prev.normalizedInvalid&&s.normalizedInvalid);
    state.start=at;state.covered=true;state.invalid=s.telemetryInvalid||(!state.waitInvalidClear&&s.normalizedInvalid);state.pit=s.pit;
  }else if(!close||(prev&&(s.p<prev.p-.02||Math.abs(s.p-prev.p)>.1||s.lap<prev.lap))) {
    state.start=s.clock!==null&&s.clock<=2&&s.clock>=0&&s.p<.02?s.time-s.clock:null;state.covered=false;
    state.invalid=s.invalid;state.waitInvalidClear=false;state.pit=s.pit;state.pending=null;
  }else {
    if(state.waitInvalidClear&&(!s.normalizedInvalid||s.time-state.start>2))state.waitInvalidClear=false;
    state.invalid=state.invalid||s.telemetryInvalid||(!state.waitInvalidClear&&s.normalizedInvalid)||!!rise;state.pit=state.pit||s.pit;
  }

  state.previous=s;
  return h2lapRecordsWrite(state);
}
h2raceBest=function() {
  return h2lapObserve().best||{seconds:null,invalid:false,estimated:false};
};
function h2lastValidLapText() {
  var lap=h2lapObserve().lastValid;
  return !lap?'—':(lap.estimated?'≈':'')+a27time({TotalSeconds:lap.seconds},true);
}
function h2lapValidityLabel(invalid) {
  if(invalid)return a27t(16);
  var labels={en:'VALID',ru:'ЗАЧТЁННЫЙ',de:'GÜLTIG',es:'VÁLIDA',fr:'VALIDE',it:'VALIDO','pt-BR':'VÁLIDA',pl:'WAŻNE',cs:'PLATNÉ',tr:'GEÇERLİ',ja:'有効',ko:'유효',zh:'有效'};
  return labels[a27lang()]||labels.en;
}
h2raceBestLabel=function() {return h2t('sessionBest')+' · '+h2lapValidityLabel(h2raceBest().invalid);};
// The footer runs in every live layout, including menus between stints. The
// visible lap fields read the same native shared state without separate caches.
h2footerTime=(function(base){return function(){h2lapObserve();return base();};})(h2footerTime);

function h2lastValidLabel() {
  var labels={en:'LAST VALID',ru:'ПОСЛЕДНИЙ ЗАЧТЁННЫЙ',de:'LETZTE GÜLTIGE',es:'ÚLTIMA VÁLIDA',fr:'DERNIER VALIDE',it:'ULTIMO VALIDO','pt-BR':'ÚLTIMA VÁLIDA',pl:'OSTATNIE WAŻNE',cs:'POSLEDNÍ PLATNÉ',tr:'SON GEÇERLİ',ja:'直近の有効ラップ',ko:'최근 유효 랩',zh:'上个有效圈'};
  return labels[a27lang()]||labels.en;
}

// iRacing reports lap zero while gridding and on the formation lap.
a27lap=(function(base){return function(){
  if(!a27ir()||!a27race())return base();
  var raw=h2irRaw(),state=h2irState(raw),lap=h2irNumber(raw,'Lap'),total=h2irRaceLapLimit(raw);
  if(state>=1&&state<=3)lap=0;
  if(lap===null||lap<0)lap=h2irArray(raw,'CarIdxLap',h2irNumber(raw,'PlayerCarIdx'));
  return lap!==null&&lap>=0?String(lap)+(total>0&&total<10000?' / '+total:''):base();
};})(a27lap);

// FlatTrackMap layout: one rail, circular markers and a larger player marker.
function h2fieldLeft(index) {
  var p=a27fieldPoint(index);return p===null?0:48+p*1824-(index===a27playerIndex()?16.5:14);
}
function h2fieldLegend() { return a27t(215); }
function h2fieldPlayer(part) {
  var index=a27playerIndex(),p=a27fieldPoint(index);
  if(part==='visible')return p!==null;
  if(part==='left')return h2fieldLeft(index);
  return h2fieldLabel(index);
}
// Scalar SDK bindings use the same current packet as the standings.
a27p=(function(base){return function(name) {
  var prefix='GameRawData.Telemetry.';
  if(name.indexOf(prefix)===0&&String(base('DataCorePlugin.CurrentGame')||'').toLowerCase().indexOf('iracing')>=0) {
    var value=h2irValue(h2irRaw(),name.slice(prefix.length));
    return value===undefined?null:value;
  }
  return base(name);
};})(a27p);
a27progress=(function(base){return function() {
  if(!a27ir())return base();
  var raw=h2irRaw(),car=h2irNumber(raw,'PlayerCarIdx');
  var value=h2irArray(raw,'CarIdxLapDistPct',car);
  return value!==null&&value>=0&&value<=1?value:null;
};})(a27progress);

// Reuse the same retained raw evidence for current-lap and recorded-lap validity.
// h2lapSample intentionally reads only the adapter's normalized flag to avoid recursion.
function a27invalid() {
  if(!a27ir())return a27normalizedInvalid();
  if(!a27live())return false;
  return !!h2lapObserve().invalid;
}
// Only an explicit iRacing session lap cap is a race distance limit.
// SimHub TotalLaps falls back to leader laps completed in unlimited sessions.
function h2irRaceLapLimit(raw) {
  var total=h2irNumber(raw,'SessionLapsTotal');
  if(total!==null&&total>0&&total<10000&&total===Math.floor(total))return total;
  var sessions=h2irGet(h2irSessionSection(raw,'SessionInfo'),'Sessions'),number=h2irNumber(raw,'SessionNum');
  for(var i=0,n=h2raceArrayLength(sessions);i<n;i++) {
    var session=h2irGet(sessions,i);
    if(h2raceNumber(h2irGet(session,'SessionNum'))!==number)continue;
    var text=String(h2irGet(session,'SessionLaps')||'').replace(/^\s+|\s+$/g,'');
    if(!/^\d+$/.test(text))return null;
    total=Number(text);return total>0&&total<10000?total:null;
  }
  return null;
}

// Stable SDK identity is independent of normalized menu/car text fields.
function h2irObservationKey(raw) {
  var replay=a27playback(),id=h2irNumber(raw,'SessionUniqueID');
  if(id===null) {
    var weekend=h2irSessionSection(raw,'WeekendInfo');
    id=h2raceNumber(h2irGet(weekend,'SubSessionID'));
    if(id===null)id=h2raceNumber(h2irGet(weekend,'SessionID'));
  }
  var session=h2irNumber(raw,replay?'ReplaySessionNum':'SessionNum');
  if(session===null)session=h2irNumber(raw,'SessionNum');
  return ['iracing',id,session,h2irNumber(raw,'PlayerCarIdx'),replay?'replay':'live'].join('|');
}

function h2observedCleanLabel() {
  var labels={en:'OBSERVED CLEAN',ru:'БЕЗ ЗАМЕЧЕННЫХ ИНЦИДЕНТОВ',de:'OHNE ERKANNTEN VORFALL',es:'SIN INCIDENTES OBSERVADOS',fr:'SANS INCIDENT OBSERVÉ',it:'SENZA INCIDENTI OSSERVATI','pt-BR':'SEM INCIDENTES OBSERVADOS',pl:'BEZ WYKRYTYCH INCYDENTÓW',cs:'BEZ ZJIŠTĚNÝCH INCIDENTŮ',tr:'GÖZLENEN OLAY YOK',ja:'検出したインシデントなし',ko:'감지된 사고 없음',zh:'未观察到事故'};
  return labels[a27lang()]||labels.en;
}
h2raceBestLabel=(function(base){return function() {
  if(!a27ir())return base();
  var lap=h2raceBest();
  return h2t('sessionBest')+(lap.seconds===null?'':(' · '+(lap.invalid?a27t(16):lap.source==='game'?'iRacing':h2observedCleanLabel())));
};})(h2raceBestLabel);
h2lastValidLabel=(function(base){return function() {
  if(!a27ir())return base();
  var lap=h2lapObserve().lastValid;
  if(lap&&lap.source==='game')return base()+' · iRacing';
  var labels={en:'LAST OBSERVED CLEAN',ru:'ПОСЛЕДНИЙ БЕЗ ИНЦИДЕНТОВ',de:'LETZTE OHNE ERKANNTEN VORFALL',es:'ÚLTIMA SIN INCIDENTES OBSERVADOS',fr:'DERNIER SANS INCIDENT OBSERVÉ',it:'ULTIMO SENZA INCIDENTI OSSERVATI','pt-BR':'ÚLTIMA SEM INCIDENTES OBSERVADOS',pl:'OSTATNIE BEZ WYKRYTYCH INCYDENTÓW',cs:'POSLEDNÍ BEZ ZJIŠTĚNÝCH INCIDENTŮ',tr:'SON GÖZLENEN OLAY YOK',ja:'最後のインシデント未検出ラップ',ko:'마지막 감지 사고 없는 랩',zh:'上个未观察到事故圈'};
  return labels[a27lang()]||labels.en;
};})(h2lastValidLabel);

// Race distance may be negative before the first timing-line crossing.
function h2irFuelRaceRemaining(raw,total) {
  var player=h2irNumber(raw,'PlayerCarIdx'),entry=h2irLiveStandings(raw).byCar[player],distance=null;
  if(entry&&entry.located&&!entry.towRecovery&&!h2irTowing(raw)&&entry.progress!==null&&entry.progress>-2)distance=entry.progress;
  // Teleport/tow or unknown location cannot safely subtract the pit-track fraction.
  // Completed distance alone gives the conservative remaining-race estimate.
  if(distance===null) {
    distance=h2irNumber(raw,'LapCompleted');
    if(distance===null&&entry)distance=entry.completed;
    if(distance===null)distance=a27dn('CompletedLaps');
    if(distance===null||distance<0)return null;
  }
  return Math.max(0,total-distance);
}

// Dynamic dashboard scalars read the same SDK packet as the race views.
// Unit settings and other static metadata remain the host's responsibility.
function h2irGaugeMapped(field) {
  return /^(Rpms|SpeedKmh|Gear|Throttle|Brake|Clutch|Fuel|FuelRaw|FuelPercent|MaxFuel|IsInPit|IsInPitLane|PitLimiterOn|ABSActive|BrakeBias|CurrentLapTime|LastLapTime|BestLapTime|SessionTimeLeft|CurrentLap|CompletedLaps|Flag_(Black|Orange|Blue|Checkered|Green|White|Yellow))$/.test(field);
}
function h2irGaugeValue(raw,field,fallback,fuelUnit) {
  var simple={Rpms:'RPM',SpeedKmh:'Speed',Gear:'Gear',Throttle:'Throttle',Brake:'Brake',Clutch:'Clutch',Fuel:'FuelLevel',FuelRaw:'FuelLevel',FuelPercent:'FuelLevelPct',BrakeBias:'dcBrakeBias',ABSActive:'BrakeABSactive',CurrentLapTime:'LapCurrentLapTime',LastLapTime:'LapLastLapTime',BestLapTime:'LapBestLapTime',SessionTimeLeft:'SessionTimeRemain',CurrentLap:'Lap',CompletedLaps:'LapCompleted'};
  var value,key=simple[field],number,scale=/^gallons?$/i.test(String(fuelUnit||''))?.264172:1;
  if(key) {
    value=h2irValue(raw,key);
    if(value===null||value===undefined)return fallback;
    if(field==='ABSActive')return a27active(value)?1:0;
    number=h2raceNumber(value);if(number===null)return null;
    if(field==='Gear')return number===-1?'R':number===0?'N':number>=1&&number<=12&&number===Math.floor(number)?String(number):null;
    if(field==='SpeedKmh')return number*3.6;
    if(field==='Throttle'||field==='Brake')return number>=0&&number<=1?number*100:null;
    if(field==='Clutch')return number>=0&&number<=1?(1-number)*100:null;
    if(field==='Fuel')return number>=0?number*scale:null;
    if(field==='FuelRaw'||field==='Rpms')return number>=0?number:null;
    if(field==='FuelPercent')return number>=0&&number<=1?number*100:null;
    if(/^(CurrentLapTime|LastLapTime|BestLapTime|SessionTimeLeft)$/.test(field))return {TotalSeconds:number};
    return number;
  }
  if(field==='MaxFuel') {
    var fuel=h2irValue(raw,'FuelLevel'),fraction=h2irValue(raw,'FuelLevelPct');
    if(fuel===null||fuel===undefined||fraction===null||fraction===undefined)return fallback;
    fuel=h2raceNumber(fuel);fraction=h2raceNumber(fraction);
    return fuel===null||fuel<0||fraction===null||fraction<0||fraction>1?null:fraction>0?fuel/fraction*scale:0;
  }
  if(field==='IsInPitLane') {
    value=h2irValue(raw,'OnPitRoad');
    if(value===null||value===undefined) {
      var player=h2irNumber(raw,'PlayerCarIdx');
      value=player===null?null:h2irGet(h2irValue(raw,'CarIdxOnPitRoad'),player);
    }
    return value===null||value===undefined?fallback:a27active(value)?1:0;
  }
  if(field==='IsInPit') {
    var car=h2irNumber(raw,'PlayerCarIdx');
    value=car===null?null:h2irGet(h2irValue(raw,'CarIdxTrackSurface'),car);
    if(value===null||value===undefined)value=h2irValue(raw,'PlayerTrackSurface');
    if(value===null||value===undefined)return fallback;
    number=h2raceNumber(value);
    return number!==null?(number===1?1:0):String(value).toLowerCase()==='inpitstall'?1:0;
  }
  if(field==='PitLimiterOn') {
    value=h2irValue(raw,'EngineWarnings');
    if(value===null||value===undefined)return fallback;
    number=h2raceNumber(value);return number===null?null:(number&16)!==0?1:0;
  }
  if(field.indexOf('Flag_')===0) {
    value=h2irValue(raw,'SessionFlags');
    if(value===null||value===undefined)return fallback;
    number=h2raceNumber(value);if(number===null)return null;
    var masks={Flag_Black:65536,Flag_Orange:1048576,Flag_Blue:32,Flag_Checkered:1,Flag_Green:4,Flag_White:2,Flag_Yellow:8|256|16384|32768};
    // Match the adapter's blue suppression while the explicit green flag is up.
    if(field==='Flag_Blue'&&(number&4)!==0)return 0;
    return (number&masks[field])!==0?1:0;
  }
  return fallback;
}
a27p=(function(base){return function(name) {
  var prefix='DataCorePlugin.GameData.NewData.';
  if(name.indexOf(prefix)!==0||!h2irGaugeMapped(name.slice(prefix.length))||String(base('DataCorePlugin.CurrentGame')||'').toLowerCase().indexOf('iracing')<0)return base(name);
  var raw=h2irRaw();
  // A bridge outage must show unavailable values, not old normalized telemetry.
  if(!raw)return null;
  var field=name.slice(prefix.length),fuelUnit=field==='Fuel'||field==='MaxFuel'?base(prefix+'FuelUnit'):null;
  var value=h2irGaugeValue(raw,field,H2_IR_GAUGE_MISSING,fuelUnit);
  return value===H2_IR_GAUGE_MISSING?base(name):value;
};})(a27p);
a27runTime=(function(base){return function() {
  return a27ir()&&a27playback()?'—':base();
};})(a27runTime);

var H2_IR_GAUGE_MISSING={};

h2irRaw=(function(base){return function(){
  if(typeof A27_STATE==='undefined')return base();
  if(Object.prototype.hasOwnProperty.call(A27_STATE,'h2irFrozenRaw'))return A27_STATE.h2irFrozenRaw;
  var now=Date.now(),cached=A27_STATE.h2irRecentRaw;
  if(cached&&now>=cached.at&&now-cached.at<16)return cached.value;
  var raw=base();A27_STATE.h2irRecentRaw={at:now,value:raw};return raw;
};})(h2irRaw);

// Publish a complete table from one SDK packet; all row fields share its order.
h2irRaw=(function(base){return function(){
  if(typeof A27_STATE!=='undefined'&&Object.prototype.hasOwnProperty.call(A27_STATE,'h2irFrozenRaw'))return A27_STATE.h2irFrozenRaw;
  return base();
};})(h2irRaw);
h2raceRow=(function(base,irDelta){return function(slot,withFlags){
  if(!a27ir())return base(slot,withFlags);
  if(typeof A27_STATE!=='undefined'&&A27_STATE.h2tableBuilding)return A27_STATE.h2tableBuilding[slot]||base(slot,withFlags);
  var packet=h2irRaw(),context=a27game()+'|'+a27live()+'|'+h2raceRowsCount()+'|'+a27lang()+'|'+h2irNumber(packet,'SessionUniqueID')+'|'+h2irNumber(packet,'SessionNum')+'|'+h2irValue(packet,'IsReplayPlaying')+'|'+h2irState(packet),now=Date.now();
  var local=typeof A27_STATE!=='undefined'?A27_STATE.h2tableBatch:null;
  var packetFrame=h2irFrameKey(packet)+'|'+h2irNumber(packet,'SessionUniqueID');
  function valid(value){return value&&value.context===context&&value.frame===packetFrame&&now>=value.created&&now-value.created<1000;}
  if(!valid(local)) {
    var serialized='',lines=null,header=null;
    if(typeof getsharedvalueordefault==='function')try {
      serialized=String(getsharedvalueordefault('APEX27','table-batch-v2',''));
      var end=serialized.indexOf('\n');
      if(end>=0)header=JSON.parse(serialized.slice(0,end));
    }catch(e){}
    if(!valid(header)) {
      var raw=packet,hadFrozen=typeof A27_STATE!=='undefined'&&Object.prototype.hasOwnProperty.call(A27_STATE,'h2irFrozenRaw'),previous=typeof A27_STATE!=='undefined'?A27_STATE.h2irFrozenRaw:null;
      var values=[],rows={},building=typeof A27_STATE!=='undefined'?A27_STATE.h2tableBuilding:null,memoFrame=A27_STATE.h2tableMemoFrame;
      A27_STATE.h2tableMemoFrame=Math.floor(now/16);
      if(typeof A27_STATE!=='undefined')A27_STATE.h2irFrozenRaw=raw;
      if(typeof A27_STATE!=='undefined')A27_STATE.h2tableBuilding=rows;
      try {
        for(var i=-5;i<=5;i++)rows[i]=base(i,true);
        for(var i=-5;i<=5;i++){rows[i].projectedIR=irDelta(i);values.push(JSON.stringify(rows[i]));}
      }
      finally {if(typeof A27_STATE!=='undefined'){A27_STATE.h2tableMemoFrame=memoFrame;A27_STATE.h2tableBuilding=building;if(hadFrozen)A27_STATE.h2irFrozenRaw=previous;else delete A27_STATE.h2irFrozenRaw;}}
      header={context:context,created:Date.now(),frame:h2irFrameKey(raw)+'|'+h2irNumber(raw,'SessionUniqueID')};
      serialized=JSON.stringify(header)+'\n'+values.join('\n');
      if(typeof setsharedvalue==='function')setsharedvalue('APEX27','table-batch-v2',serialized);
    }
    local={context:header.context,frame:header.frame,created:header.created,lines:serialized.split('\n'),rows:{}};
    if(typeof A27_STATE!=='undefined')A27_STATE.h2tableBatch=local;
  }
  if(!local.rows[slot])local.rows[slot]=JSON.parse(local.lines[Number(slot)+6]);
  return local.rows[slot];
};})(h2raceRow,h2raceIRDelta);
h2raceIRDelta=(function(base){return function(slot){return a27ir()?h2raceRow(slot,false).projectedIR:base(slot);};})(h2raceIRDelta);

// Share repeated lookups within a render frame. Telemetry is refreshed on the next frame.

a27p=(function(base){return function(name){
 var frame=A27_STATE.h2tableMemoFrame===undefined?Math.floor(Date.now()/16):A27_STATE.h2tableMemoFrame,cache=A27_STATE.h2Properties;
 if(!cache||cache.frame!==frame)cache=A27_STATE.h2Properties={frame:frame,values:{}};
 if(Object.prototype.hasOwnProperty.call(cache.values,name))return cache.values[name];
 return cache.values[name]=base(name);
};})(a27p);
// Keep the published table fixed through its 500 ms display interval. Gauges
// continue to read fresh telemetry independently.
h2raceRow=(function(base){return function(slot,flags){
 var local=A27_STATE.h2tableBatch,now=Date.now();
 if(local&&now>=local.created&&now-local.created<500&&!A27_STATE.h2tableBuilding){
  if(!local.rows[slot])local.rows[slot]=JSON.parse(local.lines[Number(slot)+6]);
  return local.rows[slot];
 }
 return base(slot,flags);
};})(h2raceRow);


function h2frameMemo(name,fn) {
 return function(){
  var frame=A27_STATE.h2tableMemoFrame===undefined?Math.floor(Date.now()/16):A27_STATE.h2tableMemoFrame,store=A27_STATE.h2Memo;
  if(!store||store.frame!==frame)store=A27_STATE.h2Memo={frame:frame,values:{}};
  var key=name;
  for(var i=0;i<arguments.length;i++)key+='|'+(typeof arguments[i]==='object'?'raw':String(arguments[i]));
  var raw=arguments.length&&typeof arguments[0]==='object'?arguments[0]:null,entry=store.values[key];
  if(entry&&entry.raw===raw)return entry.value;
  var value=fn.apply(null,arguments);store.values[key]={raw:raw,value:value};return value;
 };
}
a27game=h2frameMemo('game',a27game);
a27ir=h2frameMemo('ir',a27ir);
a27race=h2frameMemo('race',a27race);
a27lang=h2frameMemo('lang',a27lang);
a27multi=h2frameMemo('multi',a27multi);
h2raceRowsCount=h2frameMemo('rows',h2raceRowsCount);
h2irFrameKey=h2frameMemo('frame',h2irFrameKey);
h2irEntrants=h2frameMemo('entrants',h2irEntrants);
h2irLiveStandings=h2frameMemo('standings',h2irLiveStandings);
h2irFinalLapCounts=h2frameMemo('final-lap-counts',h2irFinalLapCounts);
h2ribbonSectors=h2frameMemo('ribbon-sectors',h2ribbonSectors);
h2irEstimatedLap=h2frameMemo('estimatedlap',h2irEstimatedLap);
h2irRelative=h2frameMemo('relative',h2irRelative);
h2irExtraEntries=h2frameMemo('extra',h2irExtraEntries);

h2fieldDrawOrder=h2frameMemo('field-order',h2fieldDrawOrder);
a27field=h2frameMemo('field-value',a27field);
// Native iRacing deltas do not require a newly recorded SimHub reference lap.
// Keep their reference independent from a prediction based on a SimHub trace.
function h2nativeLapDelta(kind) {
 if(!a27ir()||!a27driving()||a27playback()||a27pit()||a27progress()===null)return null;
 var raw=h2irRaw(),stem=kind==='personal'?'LapDeltaToBestLap':'LapDeltaToSessionBestLap';
 if(!a27yes(h2irValue(raw,stem+'_OK')))return null;
 var value=h2irNumber(raw,stem);return value!==null&&Math.abs(value)<86400?value:null;
}
function h2trackerPrediction() {
 var reference=h2timingSpan('EstimatedLapTime_SessionBestBasedSimhub_ReferenceLapTime');
 var delta=a27n('PersistantTrackerPlugin.EstimatedLapTime_SessionBestBasedSimhub_EstimatedDelta');
 var result=h2timingPair('simhub-record','tracker',reference,delta,reference!==null&&delta!==null?reference+delta:null);
 if(result)return result;
 reference=h2timingSpan('AllTimeBest');delta=a27n('PersistantTrackerPlugin.AllTimeBestLiveDeltaSeconds');
 var predicted=h2timingSpan('EstimatedLapTime_AllTimeBestBased');
 // The native AllTimeBest branch in SimHub updates reference/delta but can leave
 // EstimatedLapTime_AllTimeBestBased empty. Its normalized pair is still usable.
 var nativeRef=h2positiveTime('AllTimeBest'),nativeDelta=a27dn('DeltaToAllTimeBest');
 if(nativeRef!==null&&nativeDelta!==null)return h2timingPair('simhub-native','personal',nativeRef,nativeDelta,nativeRef+nativeDelta);
 return h2timingPair('all-time-record','personal',reference,delta,predicted);
}
h2lapTiming=(function(base){return function(){
 if(!a27ir())return base();
 var out={seconds:null,delta:null,prediction:null,session:false,kind:'none',source:'none',predictionSource:'none'};
 if(!a27live()||a27stage()||!a27knownTrack()||!a27driving()||a27playback()||a27pit()||a27progress()===null)return out;
 var delta=h2nativeLapDelta('personal');
 if(delta!==null){out.delta=delta;out.kind='personal';out.source='iracing-best';}
  else {
    var reference=h2positiveTime('AllTimeBest'),allDelta=a27dn('DeltaToAllTimeBest');
    if(reference===null||allDelta===null){reference=h2timingSpan('AllTimeBest');allDelta=a27n('PersistantTrackerPlugin.AllTimeBestLiveDeltaSeconds');}
    if(reference!==null&&allDelta!==null&&isFinite(allDelta)&&Math.abs(allDelta)<86400){out.delta=allDelta;out.seconds=reference;out.kind='personal';out.source='all-time-record';}
  }
 var predicted=h2trackerPrediction();
  if(predicted){out.prediction=predicted.prediction;out.predictionSource=predicted.source;}
 return out;
};})(h2lapTiming);
function h2predictionTitle(){return a27t(144);}
function h2personalContext(){
 if(!a27ir()||a27playback())return '';
 var raw=h2irRaw(),weekend=h2irSessionSection(raw,'WeekendInfo'),driver=h2irEntrant(raw,h2irNumber(raw,'PlayerCarIdx'));
 var track=h2irGet(weekend,'TrackID')||a27d('TrackName'),car=h2irGet(driver,'CarID')||h2irGet(driver,'CarPath')||a27d('CarModel');
 if(!track||!car)return '';
 return JSON.stringify(['iracing',String(track),String(h2irGet(weekend,'TrackConfigName')||a27d('TrackConfig')||''),String(car)]);
}
function h2personalClean(){
 var key=h2personalContext();if(!key)return null;
 var serialized=String(a27p('Apex27LanguagePlugin.CleanLapRecordsJson')||'{}'),cache=A27_STATE.cleanRecords;
 if(!cache||cache.json!==serialized){var values={};try{values=JSON.parse(serialized);}catch(e){}cache=A27_STATE.cleanRecords={json:serialized,values:values};}
 var own=A27_STATE.cleanLocal||(A27_STATE.cleanLocal={}),lap=h2lapObserve().bestClean,record=cache.values[key];
 if(record&&record.seconds>0&&(!own[key]||record.seconds<own[key].seconds))own[key]=record;
 if(lap&&!lap.estimated&&(!own[key]||lap.seconds<own[key].seconds)){
  own[key]={seconds:lap.seconds,estimated:!!lap.estimated};
  if(typeof setsharedvalue==='function')setsharedvalue('APEX27','clean-best-offer-v1',JSON.stringify({key:key,seconds:lap.seconds,estimated:!!lap.estimated}));
 }
 return own[key]||null;
}
function h2bestRecord(kind){
 if(kind==='personal')return a27ir()?h2personalClean():{seconds:h2timingSpan('AllTimeBest')};
 var state=h2lapObserve();return kind==='sessionClean'?(state.bestClean||(!a27ir()?{seconds:h2positiveTime('BestLapTime')}:null)):(state.best||null);
}
function h2bestRecordText(kind){var value=h2bestRecord(kind);return value&&value.seconds>0?a27time({TotalSeconds:value.seconds},true):'—';}
function h2bestRecordLabel(kind){
 if(kind==='personal'){var allTime={"en":"ALL-TIME BEST · CLEAN","ru":"ЗА ВСЁ ВРЕМЯ · ЧИСТЫЙ","de":"ALLZEITBESTE · SAUBER","es":"RÉCORD HISTÓRICO · LIMPIO","fr":"RECORD ABSOLU · PROPRE","it":"RECORD ASSOLUTO · PULITO","pt-BR":"RECORDE HISTÓRICO · LIMPO","pl":"REKORD WSZECH CZASÓW · CZYSTY","cs":"HISTORICKÝ REKORD · ČISTÝ","tr":"TÜM ZAMANLAR · TEMİZ","ja":"歴代ベスト · クリーン","ko":"역대 최고 · 클린","zh":"历史最佳 · 干净圈"};return allTime[a27lang()]||allTime.en;}
 var labels={en:['BEST LAP · CLEAN','SESSION · ALL LAPS','SESSION · CLEAN'],ru:['РЕКОРД · ЧИСТЫЙ','СЕССИЯ · ВСЕ КРУГИ','СЕССИЯ · ЧИСТЫЙ'],de:['BESTE RUNDE · SAUBER','SESSION · ALLE RUNDEN','SESSION · SAUBER'],es:['RÉCORD · LIMPIO','SESIÓN · TODAS','SESIÓN · LIMPIO'],fr:['RECORD · PROPRE','SESSION · TOUS TOURS','SESSION · PROPRE'],it:['RECORD · PULITO','SESSIONE · TUTTI','SESSIONE · PULITO'],'pt-BR':['RECORDE · LIMPO','SESSÃO · TODAS','SESSÃO · LIMPO'],pl:['REKORD · CZYSTY','SESJA · WSZYSTKIE','SESJA · CZYSTY'],cs:['REKORD · ČISTÝ','RELACE · VŠECHNA','RELACE · ČISTÝ'],tr:['REKOR · TEMİZ','SEANS · TÜM TURLAR','SEANS · TEMİZ'],ja:['自己ベスト · クリーン','セッション · 全ラップ','セッション · クリーン'],ko:['개인 최고 · 클린','세션 · 모든 랩','세션 · 클린'],zh:['个人最佳 · 干净圈','本节 · 所有圈','本节 · 干净圈']};
 return (labels[a27lang()]||labels.en)[kind==='personal'?0:kind==='sessionAll'?1:2];
}
// One observation per render frame; repeated labels must not reparse the history.
h2lapObserve=h2frameMemo('lap-observation',h2lapObserve);
h2personalClean=h2frameMemo('personal-clean',h2personalClean);
h2lapTiming=h2frameMemo('lap-timing',h2lapTiming);
function h2liveDeltaTitle(){return a27lang()==='ru'?'Δ К ЛУЧШЕМУ ЗА ВСЁ ВРЕМЯ':'Δ TO ALL-TIME BEST';}
function h2finishWaiting(state){return a27lang()==='ru'?(state===5?'ОЖИДАНИЕ ФИНИША ОСТАЛЬНЫХ':'ОЖИДАНИЕ ЗАКРЫТИЯ СЕССИИ'):(state===5?'WAITING FOR FINISHERS':'WAITING FOR SESSION END');}
function h2ribbonSectors() {
 if(!a27ir())return [];
 var raw=h2irRaw(),rows=h2irGet(h2irSessionSection(raw,'SplitTimeInfo'),'Sectors'),out=[],seen={};
 function add(number,pct){if(number!==null&&number>=1&&number<=128&&pct!==null&&pct>=0&&pct<1&&!seen[pct]){seen[pct]=true;out.push({number:number,pct:pct});}}
 for(var i=0,n=Math.min(128,h2raceArrayLength(rows));i<n;i++){
  var row=h2irGet(rows,i),number=h2raceNumber(h2irGet(row,'SectorNum'));
  add(number===null?null:number+1,h2raceNumber(h2irGet(row,'SectorStartPct')));
 }
 if(!out.length)for(i=1,n=Math.min(128,a27dn('SectorsCount')||0);i<=n;i++)add(i,a27n('IRacingExtraProperties.Sector_'+('0'+i).slice(-2)+'_SectorStartPct'));
 out.sort(function(a,b){return a.pct-b.pct;});return out;
}
function h2ribbonSector(index,part) {
 var sectors=h2ribbonSectors(),sector=sectors[Number(index)-1];
 if(!sector)return part==='text'?'':0;
 if(part==='text')return 'S'+sector.number;
 if(part==='left')return 48+1824*sector.pct;
 if(part==='labelLeft')return Math.min(1834,48+1824*sector.pct+4);
 return 0;
}
