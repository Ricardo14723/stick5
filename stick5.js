document.write(`

  <!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - Stick: El swing perfecto</h1>
            <p>Audio Latino e Inglés</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Temporada 1</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
            <div class="season-title">📺 Primera Temporada</div>
            <div class="season-specs">
                <div class="season-spec">
                    <div class="spec-label">AUDIO</div>
                    <div class="spec-value">Latino AC3 5.1</div><div class="spec-value">Ingles EAC3 JOC 5.1</div></div><div class="season-spec"><div class="spec-label">FORMATO</div>
                    <div class="spec-value">MKV</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">PESO TEMPORADA</div>
                    <div class="spec-value">8.80 GB</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">RESOLUCIÓN</div>
                    <div class="spec-value">1920 x 960</div>
                </div>
            </div>
        </div>

        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1-2</div>
                    <h3 class="episode-title">Episodios 1 y 2</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.96 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~75 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/St1k1" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">3-4</div>
                    <h3 class="episode-title">Episodios 3 y 4</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.69 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~63 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/St1K3" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">5-6</div>
                    <h3 class="episode-title">Episodios 5 y 6</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO&nbsp;</div>
                        <div class="episode-spec-value">1.79 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~63 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/St1k5" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          

           <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">7-8</div>
                    <h3 class="episode-title">Episodios 7 y 8</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.46 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~58 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/St1cK17" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          
           <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">9-10</div>
                    <h3 class="episode-title">Episodios 9 y 10</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.90 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~63 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/StIcK19" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          
        </div>
    </div>

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div>


`);

